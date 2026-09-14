import Feed, { Echo } from '@/components/Feed';
import Navbar from '@/components/Navbar';
import EchoForm from '@/components/EchoForm';
import {Head} from '@inertiajs/react';

interface HomeProps {
    echoes: Echo[];
}

export default function Home({ echoes }: HomeProps) {
    return (
        <>
            <Head title="echo // home" />

            <div className="flex flex-col bg-[#0a0a0a] text-[#EDEDEC] h-screen font-mono">
                <Navbar  />
                <Feed echoes={echoes}/>
                <EchoForm />
            </div>
        </>
    )
}