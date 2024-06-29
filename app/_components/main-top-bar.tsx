import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";

function MainTopBar({ toggleFn }: { toggleFn: () => void }) {
    const pathname = usePathname();
  return (
    <nav className="px-4 pt-4 pb-2 md:pb-0 flex justify-between items-center border-b-4 border-primary bg-neutral text-slate-300">
      <Link href="/" className="h-full w-20">
        <div className="w-full h-full border-4 border-primary bg-gray-500"></div>
      </Link>
      <div>
        <ul className="hidden md:flex items-center justify-between px-4">
          <li className={`py-2 px-4 ${pathname === '/blog/python' ? 'bg-primary' : ''}`}>
            <Link href="/blog/python">Python</Link>
          </li>
          <li className={`py-2 px-4 ${pathname === '/blog/golang' ? 'bg-primary' : ''}`}>
            <Link href="/blog/golang">Golang</Link>
          </li>
          <li className={`py-2 px-4 ${pathname === '/blog/javascript' ? 'bg-primary' : ''}`}>
            <Link href="/blog/javascript">Javascript</Link>
          </li>
          <li className={`py-2 px-4 ${pathname === '/blog/java' ? 'bg-primary' : ''}`}>
            <Link href="/blog/java">Java</Link>
          </li>
        </ul>
        <HiMenuAlt1
          size={32}
          onClick={toggleFn}
          className="cursor-pointer md:hidden"
        />
      </div>
    </nav>
  );
}

export default MainTopBar;
