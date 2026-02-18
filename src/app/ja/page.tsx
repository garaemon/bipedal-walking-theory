import Link from "next/link";
import { chaptersJa } from "@/lib/chapters-ja";

export default function HomePageJa() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        Bipedal Walking Theory
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        二足歩行の理論を理解するためのインタラクティブな教材です。
        ライブシミュレーションとインタラクティブなコード例を使って
        数学的基礎を探求しましょう。
      </p>
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Chapters</h2>
      <ul className="space-y-3">
        {chaptersJa.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              href={`/ja/chapters/${chapter.slug}`}
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
