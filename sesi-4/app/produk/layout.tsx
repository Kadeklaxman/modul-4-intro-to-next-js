import ProdukLayoutClient from './ProdukLayoutClient';

export default function ProdukLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProdukLayoutClient>{children}</ProdukLayoutClient>;
}