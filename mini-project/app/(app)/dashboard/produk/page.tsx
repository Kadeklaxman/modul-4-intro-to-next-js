import Link from "next/link";
import ProductSearch from "@/components/ProductSearch";

const products = [
  { id: "1", name: "Kopi Arabica" },
  { id: "2", name: "Kopi Robusta" },
  { id: "3", name: "Kopi Luwak" },
];

export default async function ProdukPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q } = await searchParams;

  const filtered = products.filter((item) =>
    item.name
      .toLowerCase()
      .includes((q || "").toLowerCase())
  );

  return (
    <>
      <h1>Produk</h1>

      <ProductSearch />

      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            <Link
              href={`/dashboard/produk/${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}