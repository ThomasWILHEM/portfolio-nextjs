import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import Tech from "@/components/tech";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {type} from "os";

export default function Project(props: Project) {

    return (
        <Card className="my-5 dark:text-white dark:bg-neutral-900 p-2 lg:w-2/5 mx-5">
            <CardHeader className="p-0 m-4">
                <CardTitle className="text-2xl">
                    {props.name}
                </CardTitle>
                <div className="flex p-1">
                    <CardDescription className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-6 h-6 stroke-black dark:stroke-white">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <div className="mx-2">
                            {props.short_description}
                        </div>
                    </CardDescription>
                </div>
            </CardHeader>
            <div className="border-b border-gray-200 mx-4"></div>
            <CardContent className="p-0 m-4">
                <div className="flex flex-row my-8">
                    {props.description}
                </div>
                <div className="flex flex-row justify-around">
                    {props.slug ?
                        <Link href={props.slug} className={buttonVariants({ variant: "default" }) + " text-white"} target="_blank">See More</Link> :
                        <Button className="text-white" disabled={!props.slug}>See More</Button>
                    }
                    {props.demo_path ?
                        <Link href={props.demo_path} className={buttonVariants({ variant: "default" }) + " text-white"} target="_blank">Try It</Link> :
                        <Button className="text-white" disabled={!props.demo_path}>Try It</Button>
                    }
                    {props.github_path ?
                        <Link href={props.github_path} className={buttonVariants({ variant: "default" }) + " text-white"} target="_blank">Github Repo</Link> :
                        <Button className="text-white" disabled={!props.github_path}>Github Repo</Button>
                    }
                </div>
            </CardContent>
        </Card>
    );
}