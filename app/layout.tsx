'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sidenav";
import {ThemeProvider} from "@/components/theme-provider";
import { useState } from "react";
import SideNavMobile from "@/components/sidenav-mobile";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex flex-col h-screen">
                <div className="flex-grow md:flex md:overflow-hidden">
                    <nav className="md:hidden w-screen">
                        <SideNavMobile />
                    </nav>
                    <div className="w-full md:w-80 md:block sm:hidden sm:overflow-y-auto">
                        <SideNav />
                    </div>
                    <div className="flex-grow md:overflow-y-auto">{children}</div>
                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
