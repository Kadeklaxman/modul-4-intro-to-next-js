import Link from "next/link";

const users = [
  "budi",
  "andi",
  "siti",
];

export default function PenggunaPage() {
  return (
    <>
      <h1>Daftar Pengguna</h1>

      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link
              href={`/dashboard/pengguna/${user}`}
            >
              {user}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}