import Experience from "@/components/experience";
import {useTheme} from "next-themes";
import {prisma} from "@/lib/prisma";
import Project from "@/components/project";

export default async function Home() {
    //const { theme } = useTheme()
    const projects = await prisma.project.findMany();


    return (
        <main className={`p-14 h-screen bg`}>
        <h1 className='mb-4 text-4xl'>
            Projects
        </h1>
        <div className="my-8 mx-12 flex flex-row flex-wrap">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    </main>
  );
}
