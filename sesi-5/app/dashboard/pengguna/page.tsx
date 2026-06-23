'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const USERS = ['Andi', 'Budi', 'Citra', 'Dewi', 'Eka'];

export default function PenggunaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState(searchParams.get('q') ?? '');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (filter) {
      params.set('q', filter);
    } else {
      params.delete('q');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const filtered = USERS.filter((u) =>
    u.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className='text-2xl text-black font-bold'>Daftar Pengguna</h1>
      <form onSubmit={handleSearch} className='mt-6 flex gap-2'>
        <input
          type='text'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Cari pengguna...'
          className='flex-1 rounded-md border border-gray-300 px-3 py-2'
        />
        <button
          type='submit'
          className='rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
        >
          Cari
        </button>
      </form>
      <ul className='mt-6 space-y-2'>
        {filtered.map((user) => (
          <li
            key={user}
            className='rounded-md border border-gray-200 bg-white px-4 py-2'
          >
            {user}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className='text-sm text-black-500'>Tidak ada hasil.</li>
        )}
      </ul>
    </div>
  );
}