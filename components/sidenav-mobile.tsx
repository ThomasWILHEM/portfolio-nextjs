"use client"
import { useState } from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import * as React from "react";
import clsx from 'clsx';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useTheme} from "next-themes";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function SideNavMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <Menu>
                <Menu.Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white justify-between px-4 py-2 bg-blue-500 dark:bg-zinc-800 w-full flex justify-between"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                    <span className="ml-2">{pathname}</span>

                </Menu.Button>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        static
                        className="origin-top-right absolute right-0 w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 bg-white dark:bg-zinc-800 dark:text-white"
                    >
                        <Menu.Item>
                            <Link
                                href="/"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                                onClick={() => setIsOpen(false)}
                            >
                            Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href="/about-me"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                                onClick={() => setIsOpen(false)}
                            >
                                About Me
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href="/studies"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Studies
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href="/work-experiences"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Work Experiences
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href="/projects"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href="/contact"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
            <div className="mt-2 ml-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}