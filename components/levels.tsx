import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import Tech from "@/components/tech";
import Image from "next/image";
import LevelIndicator from "@/components/level-indicator";

interface props{
    title: string,
    techs: Tech[]
}

export default function Levels({title, techs}: props) {
    return (
        <Card className="my-5 dark:text-white dark:bg-neutral-900 p-2 shadow-xl w-full">
            <CardHeader className="p-0 m-4">
                <CardTitle className="text-2xl">
                    {title}
                </CardTitle>
            </CardHeader>
            <div className="border-b border-gray-200 mx-4"></div>
            <CardContent className="p-0 m-4 h-full">
                <ul className="space-y-3 flex flex-col justify-around h-5/6">
                    {techs.map((tech, index) => (
                        <li key={index}>
                            <div className="h-full flex  items-center justify-between px-5">
                                <div className="flex basis-2/3 space-x-2 items-center">
                                    <Image src={'/' + tech.image_path} alt={tech.name} width="30" height="30" className=""/>
                                    <p>{tech.name}</p>
                                </div>
                                <div>
                                    <LevelIndicator level={tech.level}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}