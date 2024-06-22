
import Category from "./category";
import RecnetlyPosts from "./recently-posts";
import Search from "./serach";
import Tags from "./tags";
import SideBarTemplate from "./template";

function SideBar({ tags, isOpen }: { tags: any[]; isOpen: boolean }) {
  return (
    <SideBarTemplate isOpen={isOpen}>
      <Search />
      <Tags tags={tags}/>
      <RecnetlyPosts />
      <Category />
    </SideBarTemplate>
  )
}

export default SideBar;
