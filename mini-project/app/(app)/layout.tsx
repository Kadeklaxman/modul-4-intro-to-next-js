import { ReactNode } from "react";
import NavLink from "@/components/NavLink";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <aside
        style={{
          width: "250px",
          background: "#222",
          color: "white",
          padding: "1rem",
        }}
      >
        <h2>Dashboard</h2>

        <NavLink
          href="/dashboard"
          label="📊 Dashboard"
        />

        <NavLink
          href="/dashboard/produk"
          label="📦 Produk"
        />

        <NavLink
          href="/dashboard/pengguna"
          label="👤 Pengguna"
        />

        <NavLink
          href="/dashboard/pengaturan"
          label="⚙️ Pengaturan"
        />
      </aside>

      <main
        style={{
          flex: 1,
        }}
      >
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Admin Dashboard</h3>

          <LogoutButton />
        </header>

        <div style={{ padding: "2rem" }}>
          {children}
        </div>
      </main>
    </div>
  );
}