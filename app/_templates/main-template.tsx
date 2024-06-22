// "use client";

import { fetchTags } from "@/lib/notion";
import { ReactNode } from "react";
import MainTemplateClient from "./main-template-client";

async function MainTemplate({ children }: { children: ReactNode }) {
  const tags = await fetchTags();

  return (
    <MainTemplateClient tags={tags}>{children}</MainTemplateClient>
  );
}

export default MainTemplate;
