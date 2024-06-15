import { ReactNode } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function MainTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="h-[100dvh] w-full grid grid-rows-[auto_1fr_auto] lg;grid-rows-[auto_1fr]">
      <nav className="flex justify-between items-center border-b-[1px] border-gray-400/50 p-4">
        <div className="w-16 h-8 bg-gray-500 text-center rounded">Logo</div>
        <RxHamburgerMenu size={24} />
      </nav>
      <div className="overflow-y-scroll lg:flex lg;items-center h-full">
        <main className="mx-auto overflow-y-scroll w-full">{children}</main>
        <ul className="hidden lg:block border-l-[1px] border-gray-400/50 p-4">
          <li className="text-nowrap">item 11</li>
          <li className="text-nowrap">item 22</li>
          <li className="text-nowrap">item 33</li>
        </ul>
      </div>
      <footer className="p-4 border-t-[1px] border-gray-400/50 lg:hidden">
        Mobile Menu
      </footer>
    </div>
  );
}

export default MainTemplate;
