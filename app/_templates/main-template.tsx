"use client";

import { ReactNode, useState } from "react";
import MainTopBar from "../_components/main-top-bar";
import SideBar from "../_components/side-bar";
import BottomBar from "../_components/bottom-bar";

function HomePageTemplate({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropDown = () => setIsSidebarOpen((prev) => !prev);
  return (
    <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <MainTopBar toggleFn={toggleDropDown} />
      <div
        className={`overflow-y-scroll ${
          isSidebarOpen ? "relative" : ""
        } md:grid md:grid-cols-[1fr_auto]`}
      >
        <main className="overflow-y-scroll">{children}</main>
        <div
          className={`p-4 overflow-y-scroll bg-neutral-content transition-all duration-400 delay-50 ${
            isSidebarOpen
              ? "!bg-[#eaeaec] absolute md:static top-0 w-full md:w-auto"
              : "w-0 h-0 invisible md:w-auto md:h-auto md:visible"
          }`}
        >
          <SideBar />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default HomePageTemplate;
