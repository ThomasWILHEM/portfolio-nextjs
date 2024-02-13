import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import Tech from "@/components/tech";
import prisma from "@/lib/prisma";
import Levels from "@/components/levels";
import {Metadata} from "next";
import LevelIndicator from "@/components/level-indicator";

export const revalidate = 0;
export const metadata: Metadata = {
    title: 'About Me',
};

export default async function About() {
    const languages: Tech[] = await prisma.tech.findMany({
        where: {
            type: {
                equals : 'language'
            }
        }
    });

    const frameworks: Tech[] = await prisma.tech.findMany({
        where: {
            type: {
                equals : 'framework'
            }
        }
    });

    const utils: Tech[] = await prisma.tech.findMany({
        where: {
            type: {
                equals : 'utils'
            }
        }
    });

  return (
      <main className={`lg:p-14 p-6 bg-light dark:bg`}>
          <h1 className='mb-4 text-4xl'>
              About Me
          </h1>
          <div className="my-8 lg:mx-12">
              <div className="hidden lg:flex">
                  <div className="flex flex-col justify-around basis-2/5 text-2xl mb-24">
                    <Card className="bg-blue-500 dark:bg-blue-600 border-0 p-6 shadow-2xl text-white">
                        My name is Thomas, I am a web developer and I live in Bordeaux, France.
                    </Card>
                      <Card className="bg-blue-500 dark:bg-blue-600 border-0 p-6 shadow-2xl text-white">
                          I then decided to specialize in web development, and that’s how I came to do what I do.
                      </Card>
                  </div>
                  <Image src="/me2.png" alt="Me" width={500} height={500} className="basis-1-5 hidden lg:block"/>
                  <div className="flex flex-col justify-around basis-2/5 text-2xl mt-24">
                      <Card className="bg-blue-500 dark:bg-blue-600 border-0 p-6 shadow-2xl text-white">
                          I use computers since I was 8 and I started programming a while ago (for me) in 2016.
                      </Card>
                      <Card className="bg-blue-500 dark:bg-blue-600 border-0 p-6 shadow-2xl text-white">
                          I try to stay tuned with new techs and I like to learn new things by taking online courses.
                      </Card>
                  </div>
              </div>
              <div className="flex flex-col lg:hidden space-y-2 mb-5 text-xl">
                  <Card className="bg-blue-600 border-0 p-6 shadow-2xl">
                      My name is Thomas, I am a web developer and I live in Bordeaux, France. <br/><br/>
                      I use computers since I was 8 and I started programming a while ago (for me) in 2016.<br/><br/>
                      I then decided to specialize in web development, and that’s how I came to do what I do.<br/><br/>
                      I try to stay tuned with new techs and I like to learn new things by taking online courses.
                  </Card>
              </div>
              <Card className="mb-5 dark:text-white dark:bg-neutral-900 p-2 shadow-xl w-full">
                  <h1 className="text-center text-5xl p-6">
                      What I Know/Use
                  </h1>
                  <div className="border-b border-gray-200 mx-4"></div>
                  <CardContent className="p-0 m-4 flex md:space-x-5">
                      <div className="flex flex-col items-center text-center basis-1/4 space-y-1.5">
                          <LevelIndicator level={1}/>
                          <p className="font-bold">Basic</p>
                          <p className="text-sm">I have a basic understanding of the concepts and I can apply them to simple projects. </p>
                      </div>
                      <div className="flex flex-col items-center text-center basis-1/4 space-y-1.5">
                          <LevelIndicator level={3}/>
                          <p className="font-bold">Intermediate</p>
                          <p className="text-sm">I can confidently use the tools and technologies to complete bigger projects. </p>
                      </div>
                      <div className="flex flex-col items-center text-center basis-1/4 space-y-1.5">
                          <LevelIndicator level={4}/>
                          <p className="font-bold">Advanced</p>
                          <p className="text-sm">I have extensive experience and I can lead projects and contribute to complex tasks.</p>
                      </div>
                      <div className="flex flex-col items-center text-center basis-1/4 space-y-1.5">
                          <LevelIndicator level={5}/>
                          <p className="font-bold">Master</p>
                          <p className="text-sm">I know everything about the tech (IMPOSSIBLE) </p>
                      </div>
                  </CardContent>
              </Card>
              <div className="flex flex-col lg:flex-row justify-around lg:space-x-5">
                  <Levels title={"Languages"} techs={languages}/>
                  <Levels title={"Frameworks & Libraries"} techs={frameworks}/>
                  <Levels title={"Utils"} techs={utils}/>
              </div>
          </div>
      </main>
  );
}
