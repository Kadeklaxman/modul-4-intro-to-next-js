"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.replace("/login")}
    >
      Keluar
    </button>
  );
}