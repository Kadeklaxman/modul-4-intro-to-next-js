export default function PengaturanPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>
        Pengaturan
      </h1>

      <p className='mt-2 text-gray-600'>
        Kelola pengaturan akun dan aplikasi.
      </p>

      <div className='mt-6 space-y-4'>
        <div className='rounded-lg border bg-white p-4'>
          <h2 className='font-semibold'>
            Profil
          </h2>
          <p className='text-sm text-gray-600'>
            Ubah nama dan email akun.
          </p>
        </div>

        <div className='rounded-lg border bg-white p-4'>
          <h2 className='font-semibold'>
            Keamanan
          </h2>
          <p className='text-sm text-gray-600'>
            Ganti password akun.
          </p>
        </div>

        <div className='rounded-lg border bg-white p-4'>
          <h2 className='font-semibold'>
            Notifikasi
          </h2>
          <p className='text-sm text-gray-600'>
            Atur preferensi notifikasi.
          </p>
        </div>
      </div>
    </div>
  );
}