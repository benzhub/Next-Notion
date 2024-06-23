import { fetchBlogs, getData } from "@/lib/notion";
import Link from "next/link";
import { ReactNode } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
// import { NotionPage } from "../_components/notion";

const rootPageId = process.env.HOEM_PAGE_NOTION_ID ?? "";

function Container({ children }: { children: ReactNode }) {
  return <div className="md:max-w-4xl mx-auto">{children}</div>;
}

async function Home() {
  const data = await getData(rootPageId);
  const blogs = await fetchBlogs();

  console.log(blogs);

  // return (<NotionPage recordMap={data} rootPageId={rootPageId} />)
  return (
    <div className="p-4">
      <Container>
        <ul className="flex flex-col gap-8">
          {blogs.results.map((blog: any) => {
            console.log("blog", blog.properties);
            const title = blog.properties.Name?.title[0]?.plain_text;
            const date = blog.properties.Date?.date?.start;
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
                      <div className="flex gap-2">
                        <LuClock size={18} />
                        <p>date: {date}</p>
                      </div>

                      <div className="flex gap-2">
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
                      <p>date: {date}</p>
                      <FaRegFolderOpen size={18} />
                      <p>{tags.map((tag: any) => tag.name).join(", ")}</p>
                    </div>
                  </div>
                  <p>{description}</p>
                  {/* <div className="text-right ">
                    <button className="py-2 px-4 bg-gray-300/60 hover:text-primary rounded">
                      閱讀全文
                    </button>
                  </div> */}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default Home;
