import Experience from "@/components/experience";
import prisma from "@/lib/prisma";
import {Metadata} from "next";

export const revalidate = 0;
export const metadata: Metadata = {
    title: 'Work XP',
};
export default async function Home() {
    const experiences: Experience[] = await prisma.experience.findMany({
        where: {
            type: {
                equals : 'work'
            }
        },
        include:{ techs: true }
    });


    return (
        <main className={`lg:p-14 px-6 py-2 h-full`}>
        <h1 className='mb-4 text-4xl'>
            Work Experiences
        </h1>
        <div className="my-8 lg:mx-12">
            {experiences.map((experience, index) => (
                <Experience key={index} {...experience} />
            ))}
        </div>
    </main>
  );
}
