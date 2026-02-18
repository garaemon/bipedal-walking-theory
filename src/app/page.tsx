import Link from "next/link";
import { chapters } from "@/lib/chapters";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        Bipedal Walking Theory
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        An interactive educational resource for understanding the theory behind
        bipedal walking. Explore mathematical foundations with live simulations
        and interactive code examples.
      </p>
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Chapters</h2>
      <ul className="space-y-3">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              href={`/chapters/${chapter.slug}`}
              className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-medium text-gray-900">{chapter.title}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {chapter.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
