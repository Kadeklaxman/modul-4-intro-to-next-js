type Params = Promise<{
  username: string;
}>;

export default async function PenggunaPage({
  params,
}: {
  params: Params;
}) {
  const { username } = await params;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
          {username.charAt(0).toUpperCase()}
        </div>

        {/* Nama */}
        <h1 className="mt-4 text-2xl font-bold text-gray-800">
          {username}
        </h1>

        {/* Bio */}
        <p className="mt-3 text-gray-600">
          Halo, saya {username}. Saya sedang belajar Next.js dan
          Dynamic Routes.
        </p>
      </div>
    </main>
  );
}