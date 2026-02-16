import { notFound } from "next/navigation";
import { chaptersJa } from "@/lib/chapters-ja";
import { AiDisclaimerJa } from "@/components/AiDisclaimer";

const contentMap: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "01-rigid-body-dynamics": () =>
    import("@/content/ja/01-rigid-body-dynamics.mdx"),
  "02-inverted-pendulum": () =>
    import("@/content/ja/02-inverted-pendulum.mdx"),
  "03-zero-moment-point": () =>
    import("@/content/ja/03-zero-moment-point.mdx"),
  "04-passive-dynamic-walking": () =>
    import("@/content/ja/04-passive-dynamic-walking.mdx"),
  "05-preview-control": () => import("@/content/ja/05-preview-control.mdx"),
  "06-capture-point-dcm": () =>
    import("@/content/ja/06-capture-point-dcm.mdx"),
  "07-cpg": () => import("@/content/ja/07-cpg.mdx"),
  "08-whole-body-control": () =>
    import("@/content/ja/08-whole-body-control.mdx"),
  "09-hybrid-zero-dynamics": () =>
    import("@/content/ja/09-hybrid-zero-dynamics.mdx"),
  "10-mpc": () => import("@/content/ja/10-mpc.mdx"),
  "11-reinforcement-learning": () =>
    import("@/content/ja/11-reinforcement-learning.mdx"),
  "12-sim-to-real": () => import("@/content/ja/12-sim-to-real.mdx"),
  "13-frontiers": () => import("@/content/ja/13-frontiers.mdx"),
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
  return chaptersJa.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chaptersJa.find((c) => c.slug === slug);
  if (!chapter) return {};
  return { title: `${chapter.title} | Bipedal Walking Theory` };
}

export default async function ChapterPageJa({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chaptersJa.find((c) => c.slug === slug);
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
      <AiDisclaimerJa />
      <Content />
    </article>
  );
}
