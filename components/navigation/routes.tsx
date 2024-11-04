'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

import { SheetClose } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

type Routes = {
  href: string;
  label: string;
  active: (pathname: string) => boolean;
};

const routes: Routes[] = [
  {
    href: '/cifrado-rsa',
    label: 'Cifrado RSA',
    active: (pathname) => pathname === '/cifrado-rsa',
  },
  {
    href: '/cifrado-transposicion',
    label: 'Cifrado por Transposición',
    active: (pathname) => pathname === '/cifrado-transposicion',
  },
];

type RoutesProps = {
  withSheetClose?: boolean;
};

const Routes = ({ withSheetClose = false }: RoutesProps) => {
  const pathname = usePathname();

  const [Wrapper, wrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [Fragment, {}];

  return (
    <>
      {routes.map((route) => (
        <Wrapper {...wrapperProps} key={route.href}>
          <Link
            href={route.href}
            className={cn(
              'transition-colors hover:text-primary text-sm font-medium',
              route.active(pathname)
                ? 'text-accent-foreground'
                : 'text-muted-foreground'
            )}
          >
            {route.label}
          </Link>
        </Wrapper>
      ))}
    </>
  );
};

export { Routes };
