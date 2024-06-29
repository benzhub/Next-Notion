import { fetchBlogs } from "@/lib/notion";
import Link from "next/link";
import { FaRegFolderOpen } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import Container from "../_components/container";

export default async function Home() {
  const blogs = await fetchBlogs();
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
              <li key={blog.id} className="flex flex-col xm:flex-row gap-2">
                <div className="flex justify-start gap-4">
                  <Link href={`/blog/${slug}`}>
                    <div className="min-w-36 min-h-36 md:w-3/12 lg:w-2/12 bg-gray-400"></div>
                  </Link>
                  <div className="flex flex-col gap-4 xm:hidden">
                    <Link href={`/blog/${slug}`}>
                      <h4 className="hover:text-primary text-xl font-bold text-gray-600/80">
                        {title}
                      </h4>
                    </Link>
                    <div className="flex flex-col gap-1 items-start">
                      <div className="flex gap-2 items-center">
                        <LuClock size={18} />
                        <p>date: {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
                      </div>

                      <div className="flex gap-2 items-center">
                        <FaRegFolderOpen size={18} />
                        <p>{tags.map((tag: any) => tag.name).join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-9/12 lg:w-10/12 flex flex-col gap-4">
                  <div className="hidden xm:flex xm:flex-col gap-2">
                    <Link href={`/blog/${slug}`}>
                      <h4 className="hover:text-primary text-xl font-bold text-gray-600/80">
                        {title}
                      </h4>
                    </Link>
                    <div className="flex gap-2 items-center">
                      <LuClock size={18} />
                      <p>date: {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
                      <FaRegFolderOpen size={18} />
                      <p>{tags.map((tag: any) => tag.name).join(", ")}</p>
                    </div>
                  </div>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export const dynamic = "force-dynamic";