// import { getData, fetchBlogs, fetchTags } from "@/lib/notion";
import { getData } from "@/lib/notion";
import { NotionPage } from "../_components/notion";

const rootPageId = process.env.HOEM_PAGE_NOTION_ID ?? '';

async function Home() {
  const data = await getData(rootPageId);
  // const blogs = await fetchBlogs();
  // const tags = await fetchTags();
  // console.log('tags', tags)
  // blogs.results.forEach((blog) => {
  //   console.log('blog', blog)
  // })

  // tags.results.forEach((tag) => {
  //   console.log('tag', tag)
  // })

  return (<NotionPage recordMap={data} rootPageId={rootPageId} />)  
}

export default Home;