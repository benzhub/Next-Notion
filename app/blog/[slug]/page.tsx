import { NotionPage } from "@/app/components/notion";
import { fetchPageBySlug, getData } from "@/lib/notion";
import { notFound } from "next/navigation";

async function BlogSlugPage({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();

  const data = await getData(post.id);

  return <NotionPage recordMap={data} rootPageId={post.id} />;
}

export default BlogSlugPage;
