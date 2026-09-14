import { useMemo } from "react";

interface DiffTimeProps {
    created : string,
    edited : string
}

export function EditTag({created, edited} : DiffTimeProps){
    const createdDate = new Date(created);
    const editedDate = new Date(edited);

    const diff = Math.floor((editedDate.getTime() - createdDate.getTime()) / 1000);


    if(diff < 5){
        return;
    }

    return (
        <em className="text-cyan-500 opacity-50">Edited</em>
    )
}