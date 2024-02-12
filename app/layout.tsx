
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sidenav";
import {ThemeProvider} from "@/components/theme-provider";
import SideNavMobile from "@/components/sidenav-mobile";
import {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: {
        template: '%s | Thomas\'s Website',
        default: 'Thomas\'s Website',
    },
    description: 'My website where you can find information about who I am and what I do.',
    metadataBase: new URL('https://thomaswilhem.fr'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
                <nav className="md:hidden w-screen">
                    <SideNavMobile />
                </nav>
                <div className="flex-grow md:flex md:overflow-hidden">
                    <div className="w-full md:w-80 md:block sm:hidden hidden">
                        <SideNav/>
                    </div>
                    <div className="flex-grow md:overflow-y-auto">{children}</div>
                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
