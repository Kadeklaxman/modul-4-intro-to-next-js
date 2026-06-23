import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className='mx-auto max-w-md px-6 py-16'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <form action='/api/login' method='POST' className='mt-6 space-y-4'>
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2'
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            required
            className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2'
          />
        </div>
        <button
          type='submit'
          className='w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700'
        >
          Masuk
        </button>
      </form>
    </main>
  );
}