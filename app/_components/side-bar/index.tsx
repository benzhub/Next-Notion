
import { TagType } from "@/app/_types/tag";
import Category from "./category";
import RecnetlyPosts from "./recently-posts";
import Search from "./serach";
import Tags from "./tags";
import SideBarTemplate from "./template";

function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <SideBarTemplate isOpen={isOpen}>
      <Search />
      <Tags />
      <RecnetlyPosts />
      <Category />
    </SideBarTemplate>
  )
}

export default SideBar;
