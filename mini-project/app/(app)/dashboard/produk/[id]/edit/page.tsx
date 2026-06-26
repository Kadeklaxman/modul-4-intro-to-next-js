import { redirect } from "next/navigation";

async function updateProduk(id: string, formData: FormData) {
  "use server";
  const name = formData.get("name") as string;

  console.log("Updating product", id, name);

  redirect(`/dashboard/produk/${id}`);
}


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

      <form action={updateProduk.bind(null, id)}>
        <input
          defaultValue="Name"
        />

        <br />
        <br />

        <textarea
          defaultValue="Deskripsi produk"
        />

        <br />
        <br />

        <button >
          Simpan
        </button>
      </form>
    </>
  );
}