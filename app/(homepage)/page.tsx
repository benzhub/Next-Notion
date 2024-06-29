import { fetchBlogs } from "@/lib/notion";
import Link from "next/link";
import Container from "../_components/container";
import PostCard from "../_components/post-card";

export default async function Home() {
  const blogs = await fetchBlogs();
  const nextPage = blogs.next_cursor;
  return (
    <div className="p-4">
      <Container>
        <ul className="flex flex-col gap-8">
          {blogs.results.map((blog: any) => {
            const title = blog.properties.Name?.title[0]?.plain_text;
            const date = new Date(blog.properties.Date?.date?.start);
            const tags = blog.properties.Tags?.multi_select;
            const slug = blog.properties.Slug?.rich_text[0]?.plain_text;
            const description = blog.properties.Description?.rich_text[0]?.plain_text;
            return (
              <PostCard key={blog.id} title={title} date={date} tags={tags} slug={slug} description={description} />
            );
          })}
        {nextPage?.includes("-") && <Link href={`/${nextPage}`} className="mx-auto w-1/2 md:w-1/4 text-center p-2 text-lg bg-red-700 opacity-60 text-white rounded">Next Page</Link>}
        </ul>
      </Container>
    </div>
  );
}

export const dynamic = "force-dynamic";