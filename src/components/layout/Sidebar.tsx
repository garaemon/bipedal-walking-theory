"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/lib/chapters";
import { chaptersJa } from "@/lib/chapters-ja";

export function Sidebar() {
  const pathname = usePathname();
  const isJa = pathname.startsWith("/ja");
  const chapterList = isJa ? chaptersJa : chapters;
  const basePath = isJa ? "/ja/chapters" : "/chapters";

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-gray-50">
      <nav className="p-4">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Chapters
        </h2>
        <ul className="space-y-1">
          {chapterList.map((chapter, index) => {
            const href = `${basePath}/${chapter.slug}`;
            const isActive = pathname === href;
            return (
              <li key={chapter.slug}>
                <Link
                  href={href}
                  className={`block rounded px-3 py-2 text-sm ${
                    isActive
                      ? "bg-blue-100 font-medium text-blue-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2 text-gray-400">{index + 1}.</span>
                  {chapter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
