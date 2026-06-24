"use client";

import { useSearchParams } from "next/navigation";

const PRODUCTS = [
  "Laptop Asus",
  "Laptop Lenovo",
  "Laptop HP",
  "Mouse Logitech",
  "Keyboard Mechanical",
  "Monitor Samsung",
];

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");
  const results = PRODUCTS.filter((product) =>
    product.toLowerCase().includes(query?.toLowerCase() || ""),
  );
  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Pencarian Produk</h1>

      <p className="mt-2">
        {" "}
        Kata Kunci :{" "}
        <span className="font-semibold">{query || "tidak ditemukan"}</span>
      </p>

      <ul className="mt-6 space-y-2">
        {results.map((item) => (
          <li key={item} className="rounded border bg-white p-3">
            {item}
          </li>
        ))}

        {results.length === 0 && (
          <li className="rounded border bg-white p-3">
            Tidak ada produk yang ditemukan.
          </li>
        )}
      </ul>
    </div>
  );
}
