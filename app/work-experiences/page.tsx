import Experience from "@/components/experience";
import {useTheme} from "next-themes";
import {prisma} from "@/lib/prisma";
import {Metadata} from "next";

export const revalidate = 0;
export const metadata: Metadata = {
    title: 'Work XP',
};
export default async function Home() {
    //const { theme } = useTheme()
    const experiences: Experience[] = await prisma.experience.findMany({
        where: {
            type: {
                equals : 'work'
            }
        },
        include:{ techs: true }
    });


    return (
        <main className={`lg:p-14 p-6 h-full bg`}>
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
