"use client";

import { BlogsAtomType, blogsAtom } from "@/app/store/atoms/blogs-atom";
import { useAtom } from "jotai";
import Link from "next/link";

function RecnetlyPosts() {
  const [blogs, _] = useAtom<BlogsAtomType>(blogsAtom);
  return (
    <section className="flex flex-col gap-1">
      <h4 className="font-bold text-xl text-gray-500">近期文章</h4>
      <div className="bg-primary h-[3px] w-full" />
      <ul className="flex flex-col gap-2 px-1 py-2">
        {blogs.list.slice(0, 5).map((blog) => (
          <li key={blog.id} className="hover:text-primary cursor-pointer">
            <Link href={`/blog/${blog.properties.Slug.rich_text[0].text.content}`}>{blog.properties.Name.title[0].plain_text}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecnetlyPosts;
