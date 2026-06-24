import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
      />

      <br />
      <br />

      <Link href="/dashboard">
        Masuk
      </Link>
    </>
  );
}