import Link from "next/link";
import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            MyWebsite
          </Link>

          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <Link href="/tentang" className="text-gray-700 hover:text-blue-600">
              Tentang
            </Link>

            <Link href="/kontak" className="text-gray-700 hover:text-blue-600">
              Kontak
            </Link>
            <Link
              href="/docs/getting-started"
              className="text-gray-700 hover:text-blue-600"
            >
              Docs
            </Link>
            <Link href="/login" className="font-medium text-blue-600">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">{children}</main>
    </div>
  );
}
