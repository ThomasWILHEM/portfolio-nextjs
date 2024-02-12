import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import Tech from "@/components/tech";

interface props{
    level: number|null,
}

export default function Frise({level}: props) {
    const segments = Array(5).fill(null);

    var styles={
        barre: {},
        segment: {}
    };
    if(level != null) {
        styles = {
            barre: {
                width: '100%',
                height: '10px',
                backgroundColor: '#333333',
            },
            segment: {
                width: `${20 * level}%`,
                height: '10px',
                backgroundColor: '#D9D9D9',
            },
        };
    }

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between">
                <div>Beginner</div>
                <div>Intermediate</div>
                <div>Advanced</div>
            </div>
            <div style={styles.barre}>
                <div style={styles.segment} />
            </div>
        </div>
    );
}