import { notFound } from "next/navigation";
import { chapters } from "@/lib/chapters";

const contentMap: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "01-rigid-body-dynamics": () => import("@/content/01-rigid-body-dynamics.mdx"),
  "02-inverted-pendulum": () => import("@/content/02-inverted-pendulum.mdx"),
  "03-zero-moment-point": () => import("@/content/03-zero-moment-point.mdx"),
  "04-passive-dynamic-walking": () =>
    import("@/content/04-passive-dynamic-walking.mdx"),
};

function ChapterPlaceholder({ title }: { title: string }) {
  return (
    <div className="py-12 text-center">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-lg text-gray-500">
        This chapter is coming soon. Stay tuned!
      </p>
    </div>
  );
}

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
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) {
    notFound();
  }

  const loader = contentMap[slug];
  if (!loader) {
    return (
      <article className="prose prose-gray mx-auto max-w-3xl">
        <ChapterPlaceholder title={chapter.title} />
      </article>
    );
  }

  const { default: Content } = await loader();
  return (
    <article className="prose prose-gray mx-auto max-w-3xl">
      <Content />
    </article>
  );
}
