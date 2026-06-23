type Params = Promise<{
  slug?: string[];
}>;

export default async function DynamicPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const isHomepage = !slug || slug.length === 0;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full text-center">
        {isHomepage ? (
          <>
            <h1 className="text-4xl font-bold text-blue-600">
              Homepage
            </h1>

            <p className="mt-4 text-gray-600">
              Ini adalah halaman utama yang ditangani oleh
              optional catch-all route.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-green-600">
              Page: {slug.join(' / ')}
            </h1>

            <p className="mt-4 text-gray-600">
              URL memiliki {slug.length} segment.
            </p>
          </>
        )}
      </div>
    </main>
  );
}