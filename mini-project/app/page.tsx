import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard Admin</h1>
      <Link href="/login">masuk Dashboard</Link>
    </main>
  );
}
