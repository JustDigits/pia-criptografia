'use client';

import Link from 'next/link';
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
];

const NavbarRoutes = () => {
  const pathname = usePathname();

  return (
    <>
      {routes.map((route) => (
        <Link
          key={route.href}
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
      ))}
    </>
  );
};

const PanelRoutes = () => {
  const pathname = usePathname();

  return (
    <>
      {routes.map((route) => (
        <SheetClose key={route.href} asChild>
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
        </SheetClose>
      ))}
    </>
  );
};

export { NavbarRoutes, PanelRoutes };
