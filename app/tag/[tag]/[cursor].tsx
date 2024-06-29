import Container from "@/app/_components/container";
import PostCard from "@/app/_components/post-card";
import { fetchBlogsByTag } from "@/lib/notion";
import Link from "next/link";

export default async function TagPage({params: { tag }}: {params: { tag: string, cursor: string}}) {
  const blogs = await fetchBlogsByTag(tag);
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
            const description =
              blog.properties.Description?.rich_text[0]?.plain_text;
            return (
              <PostCard
                key={blog.id}
                title={title}
                date={date}
                tags={tags}
                slug={slug}
                description={description}
              />
            );
          })}
        </ul>
        {nextPage?.includes("-") && (
          <Link
            href={`/${nextPage}`}
            className="mx-auto w-1/2 md:w-1/4 text-center p-2 text-lg bg-red-700 opacity-60 text-white rounded"
          >
            Next Page
          </Link>
        )}
      </Container>
    </div>
  );
}

export const dynamic = "force-dynamic";
