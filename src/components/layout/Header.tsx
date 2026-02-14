import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Bipedal Walking Theory
        </Link>
        <nav className="ml-8 flex gap-4">
          <Link
            href="/chapters/01-rigid-body-dynamics"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Chapters
          </Link>
        </nav>
      </div>
    </header>
  );
}
