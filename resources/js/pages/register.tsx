import Navbar from '@/components/Navbar';
import RegisterForm from '@/components/RegisterForm';
import {Head} from '@inertiajs/react';



export default function Register() {
    return (
        <>
            <Head title="echo // register" />

            <div className="flex flex-col bg-[#0a0a0a] text-[#EDEDEC] h-screen font-mono">
                <Navbar  />
                <RegisterForm />
            </div>
        </>
    )
}