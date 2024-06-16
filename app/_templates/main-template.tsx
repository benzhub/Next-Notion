'use client';

import { ReactNode, useState } from "react";
import { FaBookOpen, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import SideBar from "../_components/side-bar";

function HomePageTemplate({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropDown = () => setIsSidebarOpen(prev => !prev);
  return (
    <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <nav className="bg-orange-200 p-4 flex justify-between items-center">
        <div className="w-16 h-8 bg-gray-500"></div>
        <div>
          <ul className="hidden md:flex items-center justify-between gap-4 bg-blue-200 px-4">
            <li>11111</li>
            <li>22222</li>
            <li>33333</li>
            <li>44444</li>
          </ul>
          <GiHamburgerMenu size={32} onClick={toggleDropDown} className="cursor-pointer md:hidden"/>
        </div>
      </nav>
      <div className={`overflow-y-scroll ${isSidebarOpen ? 'relative' : ''} md:grid md:grid-cols-[1fr_auto]`}>
        <main className="overflow-y-scroll">{children}</main>
        <div className={`p-4 overflow-y-scroll bg-red-200 ${isSidebarOpen ? '!bg-green-200 absolute md:static top-0 w-full md:w-auto' : 'hidden md:block'}`}>
            <SideBar />
        </div>
      </div>
      <footer className="bg-blue-200 px-4 py-2 md:hidden">
        <ul className="flex items-center justify-between">
            <li className="flex flex-col items-center"><TiHome size={24}/><p className="font-semibold">首頁</p></li>
            <li className="flex flex-col items-center"><FaBookOpen  size={24}/><p className="font-semibold">我的筆記</p></li>
            <li className="flex flex-col items-center"><FaShoppingCart size={24}/><p className="font-semibold">購物車</p></li>
            <li className="flex flex-col items-center"><FaUser size={24}/><p className="font-semibold">會員中心</p></li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePageTemplate;