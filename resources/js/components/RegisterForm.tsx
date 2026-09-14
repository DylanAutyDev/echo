import { useForm } from "@inertiajs/react";


export default function RegisterForm(){
    const { data, errors, setData, processing, post } = useForm({
        name : '',
        email : '',
        password : '',
        password_confirmation : ''
    });

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        post('/register');
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <div className="border border-[#333] max-w-full w-96">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
                    <label className="flex flex-col gap-0">
                        <span className="opacity-80 text-sm">Name</span>
                        <input className="border border-[#333] p-1 text-lg" 
                            type="text" 
                            name="name" 
                            placeholder="Jack Stack" 
                            value={data.name} 
                            onChange={(e) => {setData('name', e.target.value)}}
                            required />
                    </label>
                    <div className="text-xs text-red-500">
                        {errors.name && (
                            <span className="text-xs text-red-600 p-2">{errors.name}</span>
                        )}
                    </div>

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
                    <div className="text-xs text-red-500">
                        {errors.password && (
                            <span className="text-xs text-red-600 p-2">{errors.password}</span>
                        )}
                    </div>

                    <label className="flex flex-col gap-0">
                        <span className="opacity-80 text-sm">Confirm Password</span>
                        <input className="border border-[#333] p-1 text-lg" 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="*********"
                            onChange={(e) => {setData('password_confirmation', e.target.value)}}
                            required />
                    </label>


                    <button type="submit" className="p-2 bg-white/0 hover:bg-white/5 cursor-pointer">Sign Up</button>
                </form>
            </div>
            <div className="text-sm opacity-70 p-2 text-cyan-600">
                <a href="/login">Login Instead?</a>
            </div>
        </div>
    )
}