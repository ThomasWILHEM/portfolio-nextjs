import Image from "next/image";
import Experience from "@/components/experience";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Tech from "@/components/tech";
import {prisma} from "@/lib/prisma";
import Frise from "@/components/frise";
import Levels from "@/components/levels";

export default async function Home() {
    const languages = await prisma.tech.findMany({
        where: {
            type: {
                equals : 'language'
            }
        }
    });

    const frameworks = await prisma.tech.findMany({
        where: {
            type: {
                equals : 'framework'
            }
        }
    });

    const utils = await prisma.tech.findMany({
        where: {
            type: {
                equals : 'utils'
            }
        }
    });

  return (
      <main className={`lg:p-14 p-6 bg`}>
          <h1 className='mb-4 text-4xl'>
              About Me
          </h1>
          <div className="my-8 lg:mx-12">
              <div className="flex">
                  <div className="flex flex-col justify-around basis-2/5 text-2xl mb-24">
                    <Card className="bg-blue-600 border-0 p-6">
                        My name is Thomas, I am a web developer and I live in Bordeaux, France.
                    </Card>
                      <Card className="bg-blue-600 border-0 p-6">
                          I then decided to specialize in web development, and that’s how I came to do what I do.
                      </Card>
                  </div>
                  <Image src="/me2.png" alt="Me" width={500} height={500} className="basis-1-5"/>
                  <div className="flex flex-col justify-around basis-2/5 text-2xl mt-24">
                      <Card className="bg-blue-600 border-0 p-6">
                          I use computers since I was 8 and I started programming a while ago (for me) in 2016.
                      </Card>
                      <Card className="bg-blue-600 border-0 p-6">
                          I try to stay tuned with new techs and I like to learn new things by taking online courses.
                      </Card>
                  </div>
              </div>
              <div className="bg-neutral-900 rounded-3xl">
                  <h1 className="text-center text-5xl p-6">
                      What I Know/Use
                  </h1>
              </div>
              <div>
                  <Levels title={"Languages"} techs={languages}/>
                  <Levels title={"Frameworks & Libraries"} techs={frameworks}/>
                  <Levels title={"Utils"} techs={utils}/>

              </div>
          </div>
      </main>
  );
}
