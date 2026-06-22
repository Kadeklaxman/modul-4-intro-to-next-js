import Link from 'next/link';
import type { ReactNode } from 'react';

export default function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex gap-8'>
      {/* Sidebar */}
      <aside className='w-64 rounded-lg border bg-white p-4'>
        <h2 className='mb-4 text-lg font-bold'>
          Dokumentasi
        </h2>

        <nav>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/docs/getting-started'
                className='text-blue-600 hover:underline'
              >
                Getting Started
              </Link>
            </li>

            <li>
              <Link
                href='/docs/routing'
                className='text-blue-600 hover:underline'
              >
                Routing
              </Link>
            </li>

            <li>
              <Link
                href='/docs/layout-guide'
                className='text-blue-600 hover:underline'
              >
                Layout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className='flex-1 rounded-lg border bg-white p-6'>
        {children}
      </main>
    </div>
  );
}