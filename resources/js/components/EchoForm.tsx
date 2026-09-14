import { useForm, usePage} from "@inertiajs/react";
import { Echo } from '@/components/Feed';

interface EditProps {
    echo ?: Echo;
}


export default function EchoForm({echo} : EditProps){
    const { data, setData, post, put, processing, errors, reset } = useForm({
        message : ''
    });

    const { props } = usePage();

   

    const handleSubmit = (e?: React.SubmitEvent) => {
        if(e) { 
            e.preventDefault();
        }

        if (!data.message.trim() || processing) {
            return;
        }

        if(echo){
            put(`/echos/${echo.id}`, {
                onSuccess: () => reset()
            })
        } else {
            post('/echos', {
                onSuccess: () => reset()
            })
        }
        
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && !e.shiftKey){
            e.preventDefault();
            handleSubmit();
        }
    };

    if(!props.auth?.user){
        return (
            <div className="flex items-center justify-center p-4 border border-[#333]">
                <div className="opacty-70 text-sm">
                    <a href="/login" className="text-cyan-700">Sign in</a> or <a href="/register" className="text-cyan-700">create account</a> to start contributing.
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-xs">
                {errors.message && (
                    <span className="text-xs text-red-600 p-2">[error: {errors.message}]</span>
                )}
            </div>

            <div className="flex flex-row gap-2 items-stretch bg-black p-2">
                <textarea 
                    className="w-full focus:outline-none" 
                    name="message" 
                    placeholder="Say something..." 
                    maxLength={255} 
                    rows={2} 
                    value={data.message || echo?.message} 
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setData('message', e.target.value)}
                    required
                    ></textarea>
                <button type="submit" className="px-2 bg-white/0 hover:bg-white/5 cursor-pointer">{echo ? "Update" : "Post"}</button>
                {echo && (
                    <input type="hidden" name="id" value={echo.id} />
                )}
            </div>
            
        </form>
    )
}