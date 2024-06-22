"use client";

import { useAtom } from "jotai";
import { ReactNode, useEffect, useState } from "react";
import BottomBar from "../_components/bottom-bar";
import MainTopBar from "../_components/main-top-bar";
import SideBar from "../_components/side-bar";
import { TagType } from "../_types/tag";
import { type TagsAtomType, tagsAtom } from "../store/atoms/tags-atom";

function MainTemplateClient({ tags, children }: { tags: TagType[]; children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const [_tags, setTags] = useAtom<TagsAtomType>(tagsAtom);
  const [_tags, setTags] = useAtom<TagsAtomType>(tagsAtom);

  useEffect(() => {
    setTags({ tags });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropDown = () => setIsSidebarOpen((prev) => !prev);
  return (
    <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <MainTopBar toggleFn={toggleDropDown} />
      <div
        className={`${
          isSidebarOpen ? "relative" : ""
        } overflow-y-scroll md:grid md:grid-cols-[1fr_auto]`}
      >
        <main className="overflow-y-scroll">{children}</main>
        <SideBar isOpen={isSidebarOpen} />
      </div>
      <BottomBar />
    </div>
  );
}

export default MainTemplateClient;
