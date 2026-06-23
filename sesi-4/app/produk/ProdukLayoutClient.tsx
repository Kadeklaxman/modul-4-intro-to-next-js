'use client';

import { useState } from 'react';

export default function ProdukLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  console.log('Layout Render');

  return (
    <div>
      <div className="bg-blue-100 p-4 mb-4">
        <h2 className="font-bold">
          State Layout: {count}
        </h2>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-2 rounded bg-blue-600 px-3 py-1 text-white"
        >
          Tambah State Layout
        </button>
      </div>

      {children}
    </div>
  );
}