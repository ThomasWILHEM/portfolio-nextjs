import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";

import Image from "next/image";

export default function Tech(props: Tech) {
    return (
        <Card className="my-2 mx-2 lg:h-20 lg:w-20 min-h-fit p-0 bg-gray-100 dark:bg-zinc-800 p-2 border-4 border-zinc-300 shadow-lg">
            <div className="hidden lg:flex justify-center items-center h-full">
                <Image src={'/' + props.image_path} alt={props.name} width="100" height="100" className=""/>
            </div>
            <div className="lg:hidden h-full flex space-x-2 items-center">
                <Image src={'/' + props.image_path} alt={props.name} width="30" height="30" className=""/>
                <p>{props.name}</p>
            </div>
        </Card>
    );
}