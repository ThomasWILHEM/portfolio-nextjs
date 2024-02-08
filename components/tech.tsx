import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";

export default function Tech(props) {
    return (
        <Card className="my-2 mx-2 h-20 w-20 p-0 bg-gray-100 dark:bg-zinc-800 p-2 border-4 border-zinc-300">
            <div className="flex justify-center items-center h-full">
                <Image src={'/' + props.image_path} alt={props.name} width="100" height="100" className=""/>
            </div>
        </Card>
    );
}