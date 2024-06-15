import { Client } from "@notionhq/client";
import React from "react";

 async function Home() {

  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID! });

  console.log(pages);

  return <div>Hi</div>
}

export default Home;