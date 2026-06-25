"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const value = searchParams.get("q") || "";

  return (
    <input
      value={value}
      placeholder="Cari produk..."
      onChange={(e) =>
        router.push(
          `/dashboard/produk?q=${e.target.value}`
        )
      }
    />
  );
}