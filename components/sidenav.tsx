"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';

export default function SideNav() {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname();

    return (
        <aside id="default-sidebar"
               className="h-screen transition-transform -translate-x-full sm:translate-x-0"
               aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-neutral-900">
                <div>
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
                <div className="w-full flex justify-center my-6">
                    <Link href="/">
                        <Image
                            src="/image.jpg"
                            height={200}
                            width={200}
                            alt="Dummy Image"
                            className="rounded-full aspect-square object-cover border-blue-600 border-8"
                        />
                    </Link>
                </div>
                <Link href="/">
                    <h1 className="text-center font-extrabold text-2xl my-5">
                        Thomas WILHEM
                    </h1>
                </Link>
                <div className="flex flex-row justify-around mx-12 my-8">
                    <Link href="https://www.linkedin.com/in/thomas-wilhem-3a5010211/" target="_blank">
                        <Image
                            src="/linkedin.png"
                            height={40}
                            width={40}
                            alt="Dummy Image"
                            className="rounded-full aspect-square object-cover"
                        />
                    </Link>
                    <Link href="https://github.com/ThomasWILHEM" target="_blank">
                        <Image
                            src={theme != 'light' ? '/github-mark-white.png' : '/github-mark.png'}
                            height={40}
                            width={40}
                            alt="Dummy Image"
                            className="rounded-full aspect-square object-cover"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/thomas_wlhm/" target="_blank">
                        <Image
                            src="/instagram.svg"
                            height={40}
                            width={40}
                            alt="Dummy Image"
                            className="rounded-full aspect-square object-cover"
                        />
                    </Link>
                </div>
                <div className="mx-12 my-8">
                    <ul className="space-y-2 font-medium text-xl">
                        <li>
                            <Link href="/"
                              className={clsx('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                {
                                      'bg-gray-100 dark:bg-zinc-800': pathname === "/",
                                },
                              )}>
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-me"
                                  className={clsx('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                      {
                                          'bg-gray-100 dark:bg-zinc-800': pathname === "/about-me",
                                      },
                                  )}>
                                <span className="flex-1 ms-3 whitespace-nowrap">About Me</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/studies"
                                  className={clsx('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                      {
                                          'bg-gray-100 dark:bg-zinc-800': pathname === "/studies",
                                      },
                                  )}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Studies</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/work-experiences"
                                  className={clsx('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                      {
                                          'bg-gray-100 dark:bg-zinc-800': pathname === "/work-experiences",
                                      },
                                  )}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Work Experiences</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects"
                                  className={clsx('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                      {
                                          'bg-gray-100 dark:bg-zinc-800': pathname === "/projects",
                                      },
                                  )}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                  className={clsx('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 group'   ,
                                      {
                                          'bg-gray-100 dark:bg-zinc-800': pathname === "/contact",
                                      },
                                  )}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
