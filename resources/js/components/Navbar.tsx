import { usePage } from "@inertiajs/react"

export default function Navbar() {
    const { props } = usePage();

    return (
        <>
            <nav className="flex flex-row w-full items-center justify-between border-b gap-4 border-[#333] p-4 px-8">
                <div className="flex items-center text-2xl">echo<span className="text-cyan-400">_</span></div>
                {!props.auth?.user ?
                    <div className="flex items-center gap-4">
                        <a href="login" className="text-mono text-sm hover:underline">Sign In</a>
                    </div>
                : 
                    <div className="flex items-center gap-4">
                        <form method="POST" action="/logout">
                            <button type="submit" className="text-2xl cursor-pointer" title="Sign out now?">
                                {props.auth?.user.name.split(" ").map((part) => part.charAt(0).toUpperCase()).join("")}
                            </button>
                        </form>
                    </div>
                }
            </nav>
        </>
    )
}