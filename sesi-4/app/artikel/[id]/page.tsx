type Params = Promise<{
  id: string;
}>;

const ARTIKEL = [
  {
    id: 1,
    judul: 'Belajar Next.js untuk Pemula',
    tanggal: '20 Juni 2026',
    konten:
      'Next.js adalah framework React yang membantu membuat aplikasi web modern dengan performa tinggi.',
  },
  {
    id: 2,
    judul: 'Mengenal Dynamic Routes',
    tanggal: '21 Juni 2026',
    konten:
      'Dynamic Route memungkinkan kita membuat halaman yang URL-nya berubah sesuai data.',
  },
  {
    id: 3,
    judul: 'Apa Itu Server Component?',
    tanggal: '22 Juni 2026',
    konten:
      'Server Component dirender di server sehingga lebih cepat dan SEO friendly.',
  },
  {
    id: 4,
    judul: 'Belajar TypeScript',
    tanggal: '23 Juni 2026',
    konten:
      'TypeScript menambahkan sistem tipe pada JavaScript sehingga kode lebih aman.',
  },
  {
    id: 5,
    judul: 'Menggunakan Tailwind CSS',
    tanggal: '24 Juni 2026',
    konten:
      'Tailwind CSS adalah utility-first CSS framework yang sangat populer di React dan Next.js.',
  },
];

export async function generateStaticParams() {
  return ARTIKEL.map((artikel) => ({
    id: artikel.id.toString(),
  }));
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const artikel = ARTIKEL.find(
    (item) => item.id === Number(id)
  );

  if (!artikel) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Artikel tidak ditemukan
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <span className="text-sm text-gray-500">
          {artikel.tanggal}
        </span>

        <h1 className="mt-2 text-4xl font-bold text-gray-800">
          {artikel.judul}
        </h1>

        <div className="mt-6 border-t pt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            {artikel.konten}
          </p>
        </div>
      </article>
    </main>
  );
}