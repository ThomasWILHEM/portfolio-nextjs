import prisma from "@/lib/prisma";
import Project from "@/components/project";
import {Metadata} from "next";

export const revalidate = 0;
export const metadata: Metadata = {
    title: 'Projects',
};

export default async function Home() {
    //const { theme } = useTheme()
    const projects: Project[] = await prisma.project.findMany();

    return (
        <main className={`lg:p-14 px-6 pt-2 h-full`}>
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
