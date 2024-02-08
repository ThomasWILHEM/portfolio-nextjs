import Experience from "@/components/experience";
import {useTheme} from "next-themes";
import {prisma} from "@/lib/prisma";

export default async function Home() {
    //const { theme } = useTheme()
    const experiences = await prisma.experience.findMany({
        where: {
            type: {
                equals : 'work'
            }
        },
        include:{ techs: true }
    });


    return (
        <main className={`p-14 h-screen bg`}>
        <h1 className='mb-4 text-4xl'>
            Work Experiences
        </h1>
        <div className="my-8 mx-12">
            {experiences.map((experience, index) => (
                <Experience key={index} {...experience} />
            ))}
        </div>
    </main>
  );
}
