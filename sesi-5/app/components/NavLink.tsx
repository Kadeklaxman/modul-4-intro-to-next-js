'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
};

export default function NavLink({
  href,
  exact = false,
  children,
  className = 'text-sm text-black hover:text-blue-600',
  activeClassName = 'text-sm font-semibold text-blue-600',
}: Props) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={isActive ? activeClassName : className}>
      {children}
    </Link>
  );
}