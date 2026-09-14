import { useMemo } from "react";

interface FormattedTimeProps {
    timestamp : string
}

export function TimeAgo({timestamp} : FormattedTimeProps){
    const formatted = useMemo(() => {
        const date = new Date(timestamp);
        const now = new Date();

        const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

        const minutes = Math.floor(diff / 60);
        if(minutes < 60){
            return `${minutes}m ago`;
        }

        const hours = Math.floor(minutes / 60);
        if(hours < 24){
            return `${hours}h ago`;
        }

        const days = Math.floor(hours / 24)
        if(days < 7){
            return `${days}d ago`;
        }

        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric'
        }).format(date);

    }, [timestamp]);

    return (
        <time dateTime={timestamp} title={timestamp}>
            {formatted}
        </time>
    )
}