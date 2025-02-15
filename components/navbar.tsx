import Link from "next/link";

export const Navbar = () => {
    return (
        <header className="font-mono">
            <div className="flex flex-wrap gap-y-2 justify-between max-w-3xl m-auto py-8">
                <Link href="/" >
                    <div className="font-semibold text-xl">
                        #duclamduoc
                    </div>
                </Link>
                <nav className="flex gap-1 text-lg">
                    <Link href="/blog" className="hover:underline">
                        blog
                    </Link>
                    <span>
                        {`/`}
                    </span>
                    <Link href="/work"  className="hover:underline">
                        work
                    </Link>
                    <span>
                        {`/`}
                    </span>
                    <Link href="/projects"  className="hover:underline">
                        projects
                    </Link>
                </nav>
            </div>
        </header>
    );
}