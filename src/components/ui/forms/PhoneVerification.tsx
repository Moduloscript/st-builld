'use client';

import { useState, useEffect } from 'react';
import { Button, Input } from '@nextui-org/react';
import { toast } from 'sonner';
import { useVerification } from '@/lib/hooks/useVerification';
import { useAuth } from '@/lib/hooks/useAuth';
import { AUTH_ERRORS } from '@/lib/constants/auth';
import type { VerificationStatus } from '@/types/verification';

interface PhoneVerificationProps {
  onVerified?: (verified: boolean) => void;
  onError?: (error: string) => void;
  initialPhoneNumber?: string;
}

export const PhoneVerification = ({ 
  onVerified, 
  onError,
  initialPhoneNumber 
}: PhoneVerificationProps) => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>('pending');
  
  const { sendPhoneVerification, verifyPhone } = useAuth();
  const { verificationState, requestVerification, verifyCode } = useVerification();

  // If phone is already verified, don't show the form
  if (verificationState.phone) {
    return (
      <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-success-50">
        <div className="text-success text-lg">✓ Phone number verified</div>
        <p className="text-sm text-success-600">Your phone number has been successfully verified.</p>
      </div>
    );
  }

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and '+' at the start
    const value = e.target.value.replace(/[^\d+]/g, '');
    if (value === '' || (value.startsWith('+') && value.length <= 15)) {
      setPhoneNumber(value);
    }
  };

  const handleSendCode = async () => {
    if (!phoneNumber) {
      toast.error('Please enter a phone number');
      return;
    }

    try {
      setIsVerifying(true);
      const result = await requestVerification('phone', phoneNumber);
      
      if (result.success) {
        setIsCodeSent(true);
        setCountdown(30); // 30 second cooldown
        toast.success('Verification code sent to your phone');
      } else {
        toast.error(result.error || AUTH_ERRORS.SMS_SENDING_FAILED);
        if (onError) onError(result.error || AUTH_ERRORS.SMS_SENDING_FAILED);
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      toast.error(AUTH_ERRORS.SMS_SENDING_FAILED);
      if (onError) onError(AUTH_ERRORS.SMS_SENDING_FAILED);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      toast.error('Please enter the verification code');
      return;
    }

    try {
      setIsVerifying(true);
      const result = await verifyCode('phone', verificationCode);

      if (result.success) {
        setVerificationStatus('verified');
        toast.success('Phone number verified successfully');
        if (onVerified) onVerified(true);
      } else {
        toast.error(result.error || AUTH_ERRORS.INVALID_CODE);
        if (onError) onError(result.error || AUTH_ERRORS.INVALID_CODE);
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      toast.error(AUTH_ERRORS.VERIFICATION_FAILED);
      if (onError) onError(AUTH_ERRORS.VERIFICATION_FAILED);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          label="Phone Number"
          placeholder="+1234567890"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          disabled={isCodeSent || isVerifying}
        />
        {!isCodeSent ? (
          <Button
            color="primary"
            onClick={handleSendCode}
            isLoading={isVerifying}
            isDisabled={!phoneNumber || countdown > 0}
          >
            {countdown > 0 ? `Resend in ${countdown}s` : 'Send Code'}
          </Button>
        ) : (
          <>
            <Input
              label="Verification Code"
              placeholder="Enter 6-digit code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              disabled={isVerifying}
            />
            <div className="flex gap-2">
              <Button
                color="primary"
                onClick={handleVerifyCode}
                isLoading={isVerifying}
                className="flex-1"
              >
                Verify Code
              </Button>
              <Button
                variant="light"
                onClick={handleSendCode}
                isDisabled={countdown > 0}
                className="flex-none"
              >
                {countdown > 0 ? `Resend in ${countdown}s` : 'Resend'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
