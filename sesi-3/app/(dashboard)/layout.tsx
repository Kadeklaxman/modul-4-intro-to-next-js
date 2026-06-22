'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';

const MENU = [
  { href: '/dashboard', label: '📊 Ringkasan' },
  { href: '/dashboard/produk', label: '📦 Produk' },
  { href: '/dashboard/produk/tambah', label: '➕ Tambah Produk' },
  { href: '/dashboard/pengaturan', label: '⚙️ Pengaturan' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='flex'>
        <aside
          className={`border-r border-gray-200 bg-white transition-all ${
            collapsed ? 'w-16' : 'w-60'
          }`}
        >
          <div className='flex items-center justify-between px-4 py-4'>
            {!collapsed && (
              <span className='font-semibold text-gray-900'>Admin</span>
            )}
            <button
              onClick={() => setCollapsed((c) => !c)}
              className='rounded p-1 text-gray-500 hover:bg-gray-100'
              aria-label='Toggle sidebar'
            >
              {collapsed ? '>' : '<'}
            </button>
          </div>
          <nav className='px-2'>
            <ul className='space-y-1'>
              {MENU.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm ${
                        active
                          ? 'bg-blue-50 font-semibold text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {collapsed ? item.label[0] : item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className='flex-1 p-8'>{children}</main>
      </div>
    </div>
  );
}