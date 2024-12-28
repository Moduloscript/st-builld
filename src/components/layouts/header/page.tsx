'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { theme } from '@/lib/constants/theme'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catalog', href: '/catalog' },
  { name: 'Education', href: '/education' },
  { name: 'Blog', href: '/blog' },
  { name: 'Locations', href: '/locations' },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'Company', href: '/about' },
    ]
  },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const pathname = usePathname()

  return (
    <Disclosure as="header" className="bg-emerald-50 shadow-sm">
      {({ open }) => (
        <>
          {/* Top Bar */}
          <div className="bg-emerald-600 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-10 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-4 w-4" />
                  <span className="text-sm">Emergency: +234 800 123 4567</span>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                  <Link href="/prescription" className="text-sm hover:text-emerald-100">
                    Upload Prescription
                  </Link>
                  <Link href="/emergency" className="text-sm hover:text-emerald-100">
                    24/7 Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/logo.svg"
                    alt="St Peter's Pharmacy"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-emerald-700 font-display">
                      St Peter&apos;s
                    </span>
                    <span className="text-sm text-emerald-600">
                      Pharmacy & Healthcare
                    </span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-300">
                          {item.name}
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {item.submenu.map((submenuItem) => (
                                <Menu.Item key={submenuItem.name}>
                                  {({ active }) => (
                                    <Link
                                      href={submenuItem.href}
                                      className={classNames(
                                        active ? 'bg-emerald-50' : '',
                                        'block px-4 py-2 text-sm text-emerald-700'
                                      )}
                                    >
                                      {submenuItem.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'text-emerald-600 border-b-2 border-emerald-600'
                            : 'text-emerald-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-300',
                          'px-1 py-2 text-sm font-medium transition-colors duration-200'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="rounded-full bg-white p-2 text-emerald-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(
                              active ? 'bg-emerald-50' : '',
                              'block px-4 py-2 text-sm text-emerald-700'
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/prescriptions"
                            className={classNames(
                              active ? 'bg-emerald-50' : '',
                              'block px-4 py-2 text-sm text-emerald-700'
                            )}
                          >
                            Prescriptions
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? 'bg-emerald-50' : '',
                              'block w-full px-4 py-2 text-left text-sm text-emerald-700'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Mobile menu button */}
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
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
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <Disclosure.Button
                      as="div"
                      className={classNames(
                        pathname === item.href
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-emerald-600 hover:bg-emerald-50 hover:text-emerald-800',
                        'block px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                      <Disclosure.Panel>
                        {item.submenu.map((submenuItem) => (
                          <Disclosure.Button
                            key={submenuItem.name}
                            as={Link}
                            href={submenuItem.href}
                            className={classNames(
                              pathname === submenuItem.href
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'text-emerald-600 hover:bg-emerald-50 hover:text-emerald-800',
                              'block px-3 py-2 text-base font-medium'
                            )}
                          >
                            {submenuItem.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </Disclosure.Button>
                  ) : (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-emerald-600 hover:bg-emerald-50 hover:text-emerald-800',
                        'block px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
