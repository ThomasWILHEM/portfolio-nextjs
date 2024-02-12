import Image from "next/image";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Home | Thomas\'s Website',
};
export default function Home() {
  return (
    <main className="flex h-screen flex-col bg relative">
      <Image className="absolute bottom-0 right-0
                        xl:w-auto
                        sm:w-full
                        md:w-8/12
                        lg:w-3/5"
             src="/me.png" alt="Me" width={800} height={800}/>
        <div className="flex space-x-1
                        xl:absolute xl:text-7xl xl:top-32 xl:left-60
                        lg:absolute lg:left-24 lg:top-16 lg:text-5xl
                        md:relative md:justify-center md:text-7xl md:mt-16
                        sm:relative sm:justify-center sm:text-5xl sm:mt-16

        ">
            <div> I am </div><p className="text-blue-500">Thomas</p>
        </div>
        <div className="flex space-x-1
                        xl:absolute xl:text-7xl xl:top-64 xl:left-44
                        lg:absolute lg:left-12 lg:top-40 lg:text-5xl
                        md:relative md:justify-center md:text-7xl md:mt-8
                        sm:relative sm:justify-center sm:text-5xl sm:mt-6
        ">
            <div> A Web Developer </div>
        </div>

        <div className="flex-col text-center space-y-3
                        xl:absolute xl:text-4xl xl:left-40 xl:bottom-20
                        lg:absolute lg:left-12 lg:bottom-10 lg:text-xl
                        md:absolute md:left-12 md:bottom-72 md:text-xl
                        sm:relative sm:justify-center sm:text-2xl sm:mt-12
        ">
            <div> French gratuated web developper</div>
            <div> living in Bordeaux, France</div>
        </div>
    </main>
  );
}
