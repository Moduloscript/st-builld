'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/catalog' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    src="/logo.svg"
                    alt="St Peter&apos;s Pharmacy"
                    width={32}
                    height={32}
                  />
                  <span className="ml-3 text-xl font-semibold text-gray-900">
                    St Peter&apos;s Pharmacy
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-sm text-gray-700 hover:text-primary"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 hover:text-primary"
                >
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>Find Us</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="space-y-1 px-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 mr-3" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  <MapPinIcon className="h-5 w-5 mr-3" />
                  <span>Find Us</span>
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
