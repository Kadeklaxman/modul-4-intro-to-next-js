import NavLink from "@/app/components/NavLink";
import type { ReactNode } from "react";

const MENU = [
  {
    href: "/dashboard",
    label: "Ringkasan",
    icon: "📊",
    exact: true,
  },
  {
    href: "/dashboard/produk",
    label: "Produk",
    icon: "📦",
  },
  {
    href: "/dashboard/pengguna",
    label: "Pengguna",
    icon: "👥",
  },
  {
    href: "/dashboard/pengaturan",
    label: "Pengaturan",
    icon: "⚙️",
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg text-black font-bold">Admin Panel</span>
          <nav>
            <ul className="flex items-center gap-6">
              {MENU.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} exact={item.exact} icon={item.icon}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
