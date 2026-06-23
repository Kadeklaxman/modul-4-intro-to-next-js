'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await fetch('/api/logout', { method: 'POST' });
    router.replace('/login');
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className='rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50'
    >
      {loading ? 'Memproses...' : 'Keluar'}
    </button>
  );
}