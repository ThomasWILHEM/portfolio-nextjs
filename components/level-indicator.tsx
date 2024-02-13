import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

interface props{
    level: number|null,
}

export default function LevelIndicator({level}: props) {
    let bg = [];

    // Basic
    // @ts-ignore
    if(level < 2){
        bg = ['bg-green-600', 'bg-gray-200 dark:bg-zinc-800', 'bg-gray-200 dark:bg-zinc-800', 'bg-gray-200 dark:bg-zinc-800']
    }
    // Intermediate
    // @ts-ignore
    else if(level < 4){
        bg = ['bg-yellow-500', 'bg-yellow-500', 'bg-gray-200 dark:bg-zinc-800', 'bg-gray-200 dark:bg-zinc-800']
    }
    // Advanced
    // @ts-ignore
    else if(level < 5){
        bg = ['bg-red-600', 'bg-red-600', 'bg-red-600', 'bg-gray-200 dark:bg-zinc-800']
    }
    // Master
    else{
        bg = ['bg-purple-800', 'bg-purple-800', 'bg-purple-800', 'bg-purple-800']
    }


    return (
        <HoverCard>
            <HoverCardTrigger>
                <div className="flex">
                    <div className={`${bg[0]} w-4 h-4 rounded-l-lg mx-0.5`}/>
                    <div className={`${bg[1]} w-4 h-4 mx-0.5`}/>
                    <div className={`${bg[2]} w-4 h-4 mx-0.5`}/>
                    <div className={`${bg[3]} w-4 h-4 rounded-r-lg mx-0.5`}/>
                </div>
            </HoverCardTrigger>
            <HoverCardContent>
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
        </HoverCard>

    );
}