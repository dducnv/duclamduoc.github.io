import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="font-mono py-6">
      <div className="max-w-3xl m-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          #duclamduoc
        </Link>

        {/* Navigation */}
        {/* <nav className="flex flex-wrap gap-3 text-lg font-sans">
          <Link href="/blog" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
            blog
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
            work
          </Link>
          <span>/</span>
          <Link href="/gallery" className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-400">
            gallery
          </Link>
        </nav> */}
      </div>
    </header>
  );
};
