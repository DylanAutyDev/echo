import { TimeAgo } from "./TimeAgo";
import { EditTag } from "./EditTag";

import { router, usePage,  } from "@inertiajs/react";

export interface Echo {
    id : number,
    user : Author; 
    message : string;
    created_at : string;
    updated_at : string;
    can : {
        update: boolean;
    }
}

interface Author {
    name : string; 
}

interface FeedProps {
    echoes : Echo[];
}

export default function Feed({echoes} : FeedProps) {
    const {props} = usePage();

    if(!echoes || echoes.length === 0){
        return (
            <>
                <div className="flex flex-col items-center justify-center opacity-80 p-8">
                    No echoes found...
                </div>
            </>
        )
    }

    echoes.reverse()

    function Delete(echo :  number){
        if(echo && confirm("Are you sure you want to delete this echo?")){
            router.delete(`/echos/${echo}`);
        }
    }
    console.log(echoes);

    return (
        <>
        <div className="flex flex-col gap-1 px-8 py-4 flex-1 overflow-y-auto">
            {echoes.map((echo, index) => (
                <div key={index}
                className="flex items-center justify-between text-xs group">
                    <div className="flex gap-1">
                        <strong>{echo.user && echo.user.name || "Anon"}:</strong>
                        <span>{echo.message}</span>
                        <EditTag created={echo.created_at} edited={echo.updated_at}/>
                    </div>
                    <div className="flex gap-2">
                        { echo.can.update && 
                            <div className="gap-2 items-center hidden group-hover:flex">
                                <a href={`/echos/${echo.id}/edit`}>Edit</a>
                                <a href="#" onClick={() => Delete(echo.id)}>Delete</a>
                            </div>
                        }

                        <em className="opacity-60">
                            <TimeAgo timestamp={echo.created_at} />
                        </em>
                        
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}