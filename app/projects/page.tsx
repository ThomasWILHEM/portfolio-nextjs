import Experience from "@/components/experience";
import {useTheme} from "next-themes";
import {prisma} from "@/lib/prisma";
import Project from "@/components/project";

export const revalidate = 0;

export default async function Home() {
    //const { theme } = useTheme()
    const projects: Project[] = await prisma.project.findMany();

    return (
        <main className={`lg:p-14 p-6 h-full bg`}>
        <h1 className='mb-4 text-4xl'>
            Projects
        </h1>
        <div className="my-8 lg:mx-12 flex flex-row flex-wrap justify-around">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    </main>
  );
}
