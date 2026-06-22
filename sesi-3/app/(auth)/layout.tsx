export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg mb-8 text-3xl font-bold text-gray-800">Welcome to the Auth Page</div>
      {children}
    </div>
  );
}