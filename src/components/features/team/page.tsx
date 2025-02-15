"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BeakerIcon, AcademicCapIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  credentials?: string[];
  specialties?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamProps {
  displayMode?: 'full' | 'section';
  className?: string;
}

const ceo: TeamMember = {
  name: "Chief Dr. Peter Osaigede, MON",
  role: "Founder & Chief Executive Officer",
  imageUrl: "/our-team/ceo.jpg",
  bio: "A distinguished business titan from Benin City, Edo State, Chief Dr. Peter Osaigede has revolutionized healthcare delivery in Nigeria.  he began into pharmaceuticals in the eary 90's, establishing St. Peter's Pharmacy as a beacon of excellence in healthcare. His visionary leadership and commitment to quality healthcare have earned him numerous accolades, including the Member of the Order of the Niger (MON) and the Edo State Excellence in Business Award.",
  credentials: ["MON", "FNPS", "FPSN"],
  specialties: ["Healthcare Innovation", "Strategic Investments", "Pharmaceutical Distribution"],
  social: {
    linkedin: "https://linkedin.com/in/peter-osaigede",
    twitter: "https://twitter.com/peterosaigede"
  }
};

const seniorTeam: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Pharmacist",
    imageUrl: "/our-team/team-1.jpg",
    bio: "Over 15 years of experience in pharmaceutical care and patient counseling.",
    credentials: ["PharmD", "BCPS"],
    specialties: ["Medication Therapy", "Patient Education"],
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson"
    }
  },
  {
    name: "Michael Chen",
    role: "Clinical Director",
    imageUrl: "/our-team/team-2.jpg",
    bio: "Specializes in medication therapy management and chronic disease care.",
    credentials: ["PharmD", "BCACP"],
    specialties: ["Clinical Services", "Disease Management"],
    social: {
      linkedin: "https://linkedin.com/in/michael-chen"
    }
  },
  {
    name: "Dr. Amanda Peters",
    role: "Operations Director",
    imageUrl: "/our-team/team-3.jpg",
    bio: "Expert in pharmacy operations and healthcare management.",
    credentials: ["PharmD", "MHA"],
    specialties: ["Operations", "Quality Assurance"],
    social: {
      linkedin: "https://linkedin.com/in/amanda-peters"
    }
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-emerald-900 dark:bg-emerald-950 shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-800/30 transition-all duration-300"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <Image
          className="w-full object-cover object-center transition duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          src={member.imageUrl}
          alt={member.name}
          width={400}
          height={300}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white dark:text-white">
              {member.name}
            </h3>
            <p className="text-base leading-7 text-emerald-300 dark:text-emerald-300">
              {member.role}
            </p>
          </div>
          {member.social && (
            <div className="flex space-x-2">
              {member.social.linkedin && (
                <a 
                  href={member.social.linkedin}
                  className="text-emerald-400 hover:text-white dark:text-emerald-400 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
        
        {member.credentials && (
          <div className="mt-2 flex flex-wrap gap-2">
            {member.credentials.map((credential) => (
              <span 
                key={credential}
                className="inline-flex items-center rounded-full bg-emerald-800/50 dark:bg-emerald-800/50 px-2 py-1 text-xs font-medium text-emerald-100 dark:text-emerald-100 ring-1 ring-emerald-700"
              >
                <AcademicCapIcon className="mr-1 h-3 w-3" />
                {credential}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-base leading-7 text-emerald-100 dark:text-emerald-100">
          {member.bio}
        </p>

        {member.specialties && (
          <div className="mt-4 flex flex-wrap gap-2">
            {member.specialties.map((specialty) => (
              <span 
                key={specialty}
                className="inline-flex items-center text-xs text-emerald-300 dark:text-emerald-300"
              >
                <BeakerIcon className="mr-1 h-3 w-3" />
                {specialty}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CEOSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-emerald-900 dark:bg-emerald-950 shadow-2xl"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center p-8 lg:p-12">
        <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-emerald-800/50">
          <Image
            src={ceo.imageUrl}
            alt={ceo.name}
            width={600}
            height={450}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-emerald-700/50 rounded-2xl" />
        </div>
        
        <div className="mt-8 lg:mt-0">
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold tracking-tight text-white dark:text-white sm:text-3xl">
              {ceo.name}
            </h3>
            <div className="h-px flex-1 bg-emerald-700 dark:bg-emerald-700" />
          </div>
          
          <p className="mt-2 text-lg font-medium text-emerald-300 dark:text-emerald-300">
            {ceo.role}
          </p>

          {ceo.credentials && (
            <div className="mt-4 flex flex-wrap gap-2">
              {ceo.credentials.map((credential) => (
                <span 
                  key={credential}
                  className="inline-flex items-center rounded-full bg-emerald-800/50 px-3 py-1 text-sm font-medium text-emerald-100 ring-1 ring-emerald-700"
                >
                  <AcademicCapIcon className="mr-1.5 h-4 w-4" />
                  {credential}
                </span>
              ))}
            </div>
          )}

          <p className="mt-6 text-lg leading-8 text-emerald-100 dark:text-emerald-100">
            {ceo.bio}
          </p>

          {ceo.specialties && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ceo.specialties.map((specialty) => (
                <div 
                  key={specialty}
                  className="flex items-center space-x-3 rounded-lg bg-emerald-800/50 p-3 ring-1 ring-emerald-700"
                >
                  <BeakerIcon className="h-5 w-5 text-emerald-300" />
                  <span className="text-sm font-medium text-emerald-100">{specialty}</span>
                </div>
              ))}
            </div>
          )}

          {ceo.social && (
            <div className="mt-8 flex items-center space-x-4">
              {ceo.social.linkedin && (
                <a 
                  href={ceo.social.linkedin}
                  className="group inline-flex items-center space-x-2 text-sm font-medium text-emerald-300 hover:text-white dark:text-emerald-300 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function Team({ displayMode = 'section', className = '' }: TeamProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-24 sm:py-32 ${className}`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-emerald-100">
              Meet St. Peter&apos;s dedicated healthcare team
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16">
          <CEOSection />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-8">
            Senior Leadership
          </h3>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {seniorTeam.map((person) => (
              <TeamMemberCard key={person.name} member={person} />
            ))}
          </div>
        </motion.div>

        {displayMode === 'section' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link
              href="/team"
              className="inline-flex items-center space-x-2 text-emerald-300 hover:text-white dark:text-emerald-300 dark:hover:text-white transition-colors"
            >
              <span>Meet our entire team</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
