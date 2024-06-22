"use client";

import { ReactNode, useState } from "react";
import MainTopBar from "../_components/main-top-bar";
import SideBar from "../_components/side-bar";
import BottomBar from "../_components/bottom-bar";

function MainTemplate({ children }: { children: ReactNode }) {
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
        <SideBar isOpen={isSidebarOpen} />
      </div>
      <BottomBar />
    </div>
  );
}

export default MainTemplate;
