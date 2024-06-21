import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen, FaShoppingCart, FaUser } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

function BottomBar() {
  const pathname = usePathname();
  return (
    <footer className="px-4 py-2 md:hidden bg-neutral text-slate-300">
      <ul className="flex items-center justify-between">
        <Link
          href="/blog/python"
          className={`flex flex-col items-center ${
            pathname === "/blog/python" ? "text-primary" : ""
          }`}
        >
          <TiHome size={24} />
          <p>Python</p>
        </Link>
        <Link
          href="/blog/golang"
          className={`flex flex-col items-center ${
            pathname === "/blog/golang" ? "text-primary" : ""
          }`}
        >
          <FaBookOpen size={24} />
          <p>Golang</p>
        </Link>
        <Link
          href="/blog/javascript"
          className={`flex flex-col items-center ${
            pathname === "/blog/javascript" ? "text-primary" : ""
          }`}
        >
          <FaShoppingCart size={24} />
          <p>Javascript</p>
        </Link>
        <Link
          href="/blog/java"
          className={`flex flex-col items-center ${
            pathname === "/blog/java" ? "text-primary" : ""
          }`}
        >
          <FaUser size={24} />
          <p>Java</p>
        </Link>
      </ul>
    </footer>
  );
}

export default BottomBar;
