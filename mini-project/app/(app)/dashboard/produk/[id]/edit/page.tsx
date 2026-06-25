export default async function EditProduk({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1>Edit Produk {id}</h1>

      <form>
        <input
          defaultValue="Kopi Arabica"
        />

        <br />
        <br />

        <textarea
          defaultValue="Deskripsi produk"
        />

        <br />
        <br />

        <button>
          Simpan
        </button>
      </form>
    </>
  );
}