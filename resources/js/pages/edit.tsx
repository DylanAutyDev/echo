import Feed, { Echo } from '@/components/Feed';
import Navbar from '@/components/Navbar';
import EchoForm from '@/components/EchoForm';
import {Head} from '@inertiajs/react';

interface EditProps {
    echoe: Echo;
}

export default function Home({ echoe }: EditProps) {
    return (
        <>
            <Head title="echo // edit" />

            <div className="flex flex-col bg-[#0a0a0a] text-[#EDEDEC] h-screen font-mono">
                <Navbar  />
                <EchoForm echo={echoe}/>
            </div>
        </>
    )
}