'use client';

import { Button } from '@nextui-org/react';
import { IconType } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useAuth } from '@/lib/hooks/useAuth';
import { AuthProvider } from '@/types/auth';
import { toast } from 'sonner';

interface SocialAuthButtonProps {
  provider: AuthProvider;
  className?: string;
}

const providerIcons: Record<AuthProvider, IconType> = {
  google: FcGoogle,
  facebook: FaFacebook,
};

const providerNames: Record<AuthProvider, string> = {
  google: 'Google',
  facebook: 'Facebook',
};

export function SocialAuthButton({ provider, className }: SocialAuthButtonProps) {
  const { signInWithSocial } = useAuth();
  const Icon = providerIcons[provider];

  const handleClick = async () => {
    try {
      const { success, error, redirectTo } = await signInWithSocial({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?provider=${provider}`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (!success) {
        toast.error(`${providerNames[provider]} login failed`, {
          description: error,
        });
        return;
      }

      if (redirectTo) {
        window.location.href = redirectTo;
      }
    } catch (error) {
      console.error('Social auth error:', error);
      toast.error(`${providerNames[provider]} login failed`, {
        description: 'An unexpected error occurred',
      });
    }
  };

  return (
    <Button
      variant="bordered"
      startContent={<Icon className="text-xl" />}
      className={className}
      onClick={handleClick}
      fullWidth
    >
      Continue with {providerNames[provider]}
    </Button>
  );
}
