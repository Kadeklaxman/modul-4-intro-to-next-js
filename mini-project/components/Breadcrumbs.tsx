"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      style={{
        marginBottom: "20px",
        fontSize: "14px",
      }}
    >
      {segments.map((segment, index) => {
        const href =
          "/" +
          segments
            .slice(0, index + 1)
            .join("/");

        const isLast =
          index === segments.length - 1;

        const label =
          segment.charAt(0).toUpperCase() +
          segment.slice(1);

        return (
          <span key={href}>
            {isLast ? (
              <span>{label}</span>
            ) : (
              <>
                <Link href={href}>
                  {label}
                </Link>
                {" > "}
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}