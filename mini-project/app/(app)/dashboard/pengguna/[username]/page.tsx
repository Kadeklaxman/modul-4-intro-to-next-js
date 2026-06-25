export default async function UserProfile({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}) {
  const { username } = await params;

  return (
    <>
      <h1>Profil Pengguna</h1>

      <p>Username: {username}</p>

      <p>Email: {username}@gmail.com</p>

      <p>Status: Aktif</p>
    </>
  );
}