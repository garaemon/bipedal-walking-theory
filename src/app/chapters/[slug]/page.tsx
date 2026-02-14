import { notFound } from "next/navigation";
import { chapters } from "@/lib/chapters";

// Map slugs to content components loaded dynamically
const contentMap: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "01-rigid-body-dynamics": () => import("@/content/01-rigid-body-dynamics.mdx"),
};

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) return {};
  return { title: `${chapter.title} | Bipedal Walking Theory` };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loader = contentMap[slug];
  if (!loader) {
    notFound();
  }

  const { default: Content } = await loader();
  return (
    <article className="prose prose-gray mx-auto max-w-3xl">
      <Content />
    </article>
  );
}
