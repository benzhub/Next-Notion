"use client";

import { useAtom } from "jotai";
import { ReactNode, useEffect, useState } from "react";
import BottomBar from "../_components/bottom-bar";
import MainTopBar from "../_components/main-top-bar";
import SideBar from "../_components/side-bar";
import { TagType } from "../_types/tag";
import { blogsAtom, type BlogsAtomType } from "../store/atoms/blogs-atom";
import { categoriesAtom, type CategoriesAtomType } from "../store/atoms/categories-atom";
import { tagsAtom, type TagsAtomType } from "../store/atoms/tags-atom";

function MainTemplateClient({ categories, blogs, tags, children }: { categories: TagType[]; blogs: any[], tags: TagType[]; children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [_, setTags] = useAtom<TagsAtomType>(tagsAtom);
  const [__, setBlogs] = useAtom<BlogsAtomType>(blogsAtom);
  const [___, setCategories] = useAtom<CategoriesAtomType>(categoriesAtom);

  useEffect(() => {
    setTags({ list: tags });
    setBlogs({ list: blogs });
    setCategories({ list: categories });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropDown = () => setIsSidebarOpen((prev) => !prev);
  return (
    <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <MainTopBar toggleFn={toggleDropDown} />
      <div className={`overflow-y-scroll md:grid md:grid-cols-[1fr_auto]${isSidebarOpen ? " relative" : ""}`}>
        {!isSidebarOpen && <main className="overflow-y-scroll">{children}</main>}
        <SideBar isOpen={isSidebarOpen} />
      </div>
      <BottomBar />
    </div>
  );
}

export default MainTemplateClient;
