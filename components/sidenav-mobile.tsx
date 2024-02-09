"use client"
import { useState } from "react";
import { Disclosure } from '@headlessui/react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import * as React from "react";
import clsx from 'clsx';

export default function SideNavMobile() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="md:hidden">
            {({ open }) => (
                <>
                    <Disclosure.Button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex text-white justify-between px-4 py-2 bg-gray-100 dark:bg-zinc-800 w-full"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                        <span className="ml-2">{pathname}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className={`${isMobileMenuOpen ? "block absolute top-8 left-0 w-full z-20" : "hidden"} px-4 pt-4 pb-2 text-gray-900 bg-gray-100 dark:bg-zinc-800`}>
                        <ul className="font-medium text-xl">
                            <li>
                                <Link href="/"
                                      className={clsx('flex items-center pl-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                          {
                                              'bg-gray-100 dark:bg-zinc-800': pathname === "/",
                                          },
                                      )}>
                                    <span className="ms-3">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-me"
                                      className={clsx('flex items-center pl-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                          {
                                              'bg-gray-100 dark:bg-zinc-800': pathname === "/about-me",
                                          },
                                      )}>
                                    <span className="flex-1 ms-3 whitespace-nowrap">About Me</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/studies"
                                      className={clsx('flex items-center pl-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                          {
                                              'bg-gray-100 dark:bg-zinc-800': pathname === "/studies",
                                          },
                                      )}>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Studies</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/work-experiences"
                                      className={clsx('flex items-center pl-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                          {
                                              'bg-gray-100 dark:bg-zinc-800': pathname === "/work-experiences",
                                          },
                                      )}>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Work Experiences</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects"
                                      className={clsx('flex items-center pl-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                          {
                                              'bg-gray-100 dark:bg-zinc-800': pathname === "/projects",
                                          },
                                      )}>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                      className={clsx('flex items-center pl-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                          {
                                              'bg-gray-100 dark:bg-zinc-800': pathname === "/contact",
                                          },
                                      )}>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}