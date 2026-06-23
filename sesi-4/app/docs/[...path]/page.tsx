type Params = Promise<{
  path: string[];
}>;

export default async function DocsPage({
  params,
}: {
  params: Params;
}) {
  const { path } = await params;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        <p className="text-sm text-gray-500 mb-4">
          Dokumentasi
        </p>

        <h1 className="text-3xl font-bold mb-6">
          Catch-All Route
        </h1>

        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 text-blue-600 font-medium">
          <span>Home</span>

          <span>&gt;</span>

          <span>Docs</span>

          {path.map((segment, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <span>&gt;</span>
              <span>{segment}</span>
            </div>
          ))}
        </div>

        {/* Path Lengkap */}
        <div className="mt-8 rounded-lg border p-6">
          <h2 className="font-bold text-lg mb-3">
            Path Lengkap
          </h2>

          <p className="text-gray-700">
            {path.join(' / ')}
          </p>
        </div>

        {/* Informasi */}
        <div className="mt-6 rounded-lg bg-gray-50 p-6">
          <p>
            Jumlah segment:
            <strong> {path.length}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}