import { notion } from "@/lib/notion";
import { NotionPage } from "./components/notion";

const rootPageId = '0636b28296844688bd4eb50ee5b7c09b';

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}

async function Home() {
  const data = await getData(rootPageId);

  return (<NotionPage recordMap={data} rootPageId={rootPageId} />)  
}

export default Home;