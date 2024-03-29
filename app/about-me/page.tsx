import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import Tech from "@/components/tech";
import prisma from "@/lib/prisma";
import Levels from "@/components/levels";
import {Metadata} from "next";
import LevelIndicator from "@/components/level-indicator";
import Link from "next/link";

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
      <main className={`lg:p-14 px-6 py-2`}>
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
                  <div className="flex flex-col justify-around basis-2/5 text-2xl mt-24 relative">
                      <Card className="bg-blue-500 dark:bg-blue-600 border-0 p-6 shadow-2xl text-white">
                          I use computers since I was 8 and I started programming a while ago (for me) in 2016.
                      </Card>
                      <Card className="bg-blue-500 dark:bg-blue-600 border-0 p-6 shadow-2xl text-white">
                          I try to stay tuned with new techs and I like to learn new things by taking online courses.
                      </Card>
                      <Link href="#knowledge">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 absolute bottom-10 right-0 animate-bounce fill-blue-500">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                          </svg>

                      </Link>
                  </div>
              </div>
              <div className="flex flex-col lg:hidden space-y-2 mb-5 text-xl">
                  <Card className="bg-blue-600 border-0 p-6 shadow-2xl text-white">
                      My name is Thomas, I am a web developer and I live in Bordeaux, France. <br/><br/>
                      I use computers since I was 8 and I started programming a while ago (for me) in 2016.<br/><br/>
                      I then decided to specialize in web development, and that’s how I came to do what I do.<br/><br/>
                      I try to stay tuned with new techs and I like to learn new things by taking online courses.
                  </Card>
              </div>
              <Card className="mb-5 dark:text-white dark:bg-neutral-900 p-2 shadow-xl w-full">
                  <h1 className="text-center text-5xl p-6" id="knowledge">
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
                  <Levels title={"Utilities"} techs={utils}/>
              </div>
          </div>
      </main>
  );
}
