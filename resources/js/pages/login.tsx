import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';
import {Head} from '@inertiajs/react';



export default function Login() {
    return (
        <>
            <Head title="echo // register" />

            <div className="flex flex-col bg-[#0a0a0a] text-[#EDEDEC] h-screen font-mono">
                <Navbar  />
                <LoginForm />
            </div>
        </>
    )
}