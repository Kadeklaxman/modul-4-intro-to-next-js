import Link from 'next/link';

const ARTIKEL = [
  {
    id: 1,
    judul: 'Belajar Next.js untuk Pemula',
  },
  {
    id: 2,
    judul: 'Mengenal Dynamic Routes',
  },
  {
    id: 3,
    judul: 'Apa Itu Server Component?',
  },
  {
    id: 4,
    judul: 'Belajar TypeScript',
  },
  {
    id: 5,
    judul: 'Menggunakan Tailwind CSS',
  },
];

export default function ArtikelPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Daftar Artikel
      </h1>

      <div className="space-y-4">
        {ARTIKEL.map((artikel) => (
          <Link
            key={artikel.id}
            href={`/artikel/${artikel.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50"
          >
            {artikel.judul}
          </Link>
        ))}
      </div>
    </main>
  );
}