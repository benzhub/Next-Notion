import { fetchBlogs, fetchTags, fetchcategories } from "@/lib/notion";
import { ReactNode } from "react";
import MainTemplateClient from "./main-template-client";

async function MainTemplate({ children }: { children: ReactNode }) {
  const tags = await fetchTags();
  const categories = await fetchcategories();
  const blogsObj = await fetchBlogs();
  const blogs = blogsObj.results;
  return (
    <MainTemplateClient categories={categories} blogs={blogs} tags={tags}>{children}</MainTemplateClient>
  );
}

export default MainTemplate;
