"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isJa = pathname.startsWith("/ja");
  const homeHref = isJa ? "/ja" : "/";
  const chaptersHref = isJa ? "/ja" : "/";

  function buildSwitchHref(): string {
    if (isJa) {
      // /ja -> /, /ja/chapters/xxx -> /chapters/xxx
      const enPath = pathname.replace(/^\/ja/, "") || "/";
      return enPath;
    }
    // / -> /ja, /chapters/xxx -> /ja/chapters/xxx
    return `/ja${pathname === "/" ? "" : pathname}`;
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center px-6">
        <Link href={homeHref} className="text-xl font-bold text-gray-900">
          Bipedal Walking Theory
        </Link>
        <nav className="ml-8 flex gap-4">
          <Link
            href={chaptersHref}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Chapters
          </Link>
        </nav>
        <div className="ml-auto flex gap-2 text-sm">
          <Link
            href={buildSwitchHref()}
            className="rounded border border-gray-300 px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            {isJa ? "EN" : "JA"}
          </Link>
        </div>
      </div>
    </header>
  );
}
