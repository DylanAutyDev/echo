import { useForm } from "@inertiajs/react";


export default function LoginForm(){
    const { data, errors, setData, processing, post } = useForm({
        email : '',
        password : '',
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        post('/login');
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <div className="border border-[#333] max-w-full w-96">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
                    <label className="flex flex-col gap-0">
                        <span className="opacity-80 text-sm">Email</span>
                        <input className="border border-[#333] p-1 text-lg" 
                            type="email" 
                            name="email" 
                            placeholder="mail@example.com" 
                            value={data.email} 
                            onChange={(e) => {setData('email', e.target.value)}}
                            required />
                    </label>
                    <div className="text-xs text-red-500">
                        {errors.email && (
                            <span className="text-xs text-red-600 p-2">{errors.email}</span>
                        )}
                    </div>

                    <label className="flex flex-col gap-0">
                        <span className="opacity-80 text-sm">Password</span>
                        <input className="border border-[#333] p-1 text-lg" 
                            type="password" 
                            name="password" 
                            placeholder="*********" 
                            onChange={(e) => {setData('password', e.target.value)}}
                            required />
                    </label>

                    <button type="submit" className="p-2 bg-white/0 hover:bg-white/5 cursor-pointer">Sign In</button>
                </form>
            </div>
            <div className="text-sm opacity-70 p-2 text-cyan-600">
                <a href="/register">Register Instead?</a>
            </div>
        </div>
    )
}