import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import Tech from "@/components/tech";

export default function Experience(props: Experience) {
    return (
        <Card className="my-5 dark:text-white dark:bg-neutral-900 p-2">
            <CardHeader className="p-0 m-4">
                <CardTitle className="text-2xl">
                    {props.name}
                </CardTitle>
                <div className="flex p-1">
                    <div className="flex flex-row justify-between lg:basis-3/5">
                        <div className="flex flex-row items-center text-sm text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            <div className="mx-2">
                                {props.dates}
                            </div>
                        </div>
                        <div className="flex flex-row items-center text-sm text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                            </svg>

                            <div className="mx-2">
                                {props.institution}
                            </div>
                        </div>
                        <div className="flex flex-row items-center text-sm text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="w-6 h-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            <div className="mx-2">
                                {props.city}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </CardHeader>
            <div className="border-b border-gray-200 mx-4"></div>
            <CardContent className="p-0 m-4">
                <div className="flex flex-col lg:flex-row my-8">
                    <ul className="flex flex-col basis-1/4 justify-center list-disc px-10 space-y-4 flex-shrink-0" dangerouslySetInnerHTML={{ __html: props.infos }}></ul>
                    <div className="lg:border-r border-b lg:p-0 p-3 border-gray-200"></div>
                    <div className="px-5 flex items-center lg:pt-0 pt-5">
                        <div className="flex flex-row flex-wrap">
                            {props.techs.map((tech, index) => (
                                <Tech key={index} {...tech} />
                            ))}
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}