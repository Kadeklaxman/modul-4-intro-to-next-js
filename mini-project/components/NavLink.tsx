"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

export default function NavLink({
  href,
  label,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <div style={{ marginBottom: "10px" }}>
      <Link
        href={href}
        style={{
          color: active ? "yellow" : "white",
        }}
      >
        {label}
      </Link>
    </div>
  );
}