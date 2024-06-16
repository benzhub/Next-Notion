import { getData } from "@/lib/notion";
import { NotionPage } from "../_components/notion";

const rootPageId = process.env.HOEM_PAGE_NOTION_ID ?? '';

async function Home() {
  const data = await getData(rootPageId);

  return (<NotionPage recordMap={data} rootPageId={rootPageId} />)  
}

export default Home;