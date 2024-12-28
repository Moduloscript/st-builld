"use client";

import Image from "next/image";

const people = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Pharmacist",
    imageUrl: "/team/sarah-johnson.jpg",
    bio: "Over 15 years of experience in pharmaceutical care and patient counseling.",
  },
  {
    name: "Michael Chen",
    role: "Clinical Pharmacist",
    imageUrl: "/team/michael-chen.jpg",
    bio: "Specializes in medication therapy management and chronic disease care.",
  },
  {
    name: "Dr. Amanda Peters",
    role: "Pharmacy Manager",
    imageUrl: "/team/amanda-peters.jpg",
    bio: "Expert in pharmacy operations and healthcare management.",
  },
  // Add more team members as needed
];

export function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet our dedicated team of healthcare professionals committed to providing you with the best pharmaceutical care.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
                width={300}
                height={200}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-indigo-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
