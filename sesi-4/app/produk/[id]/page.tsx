import Link from 'next/link';

type Params = Promise<{
  id: string;
}>;

export default async function ProdukPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Produk {id}
      </h1>

      <div className="mt-6 flex gap-4">
        <Link
          href="/produk/1"
          className="rounded bg-black-200 px-3 py-2"
        >
          Produk 1
        </Link>

        <Link
          href="/produk/2"
          className="rounded bg-black-200 px-3 py-2"
        >
          Produk 2
        </Link>
      </div>
    </div>
  );
}