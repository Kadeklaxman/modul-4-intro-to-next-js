import Link from "next/link";

export default async function DetailProduk({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1>Detail Produk</h1>

      <p>ID Produk: {id}</p>

      <Link
        href={`/dashboard/produk/${id}/edit`}
      >
        Edit Produk
      </Link>
    </>
  );
}