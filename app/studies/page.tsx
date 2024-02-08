"use client"

import Image from "next/image";
import Diploma from "@/components/diploma";
import {useTheme} from "next-themes";
import {experiences} from '@/lib/placeholder-data'

export default function Home() {
    const { theme } = useTheme()

    return (
        <main className={`p-14 h-screen ${theme === 'dark' ? 'bg' : 'bg-light'}`}>
        <h1 className='mb-4 text-4xl'>
            Studies
        </h1>
        <div className="my-8">
            {experiences.map((experience, index) => (
                <Diploma key={index} {...experience} />
            ))}
        </div>
    </main>
  );
}
