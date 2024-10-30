import { PanelLeftIcon as PanelIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Logo } from './logo';
import { NavbarRoutes, PanelRoutes } from './routes';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center justify-between sm:justify-start">
        <Logo />
        <nav className="ml-8 space-x-4 hidden sm:flex sm:items-center">
          <NavbarRoutes />
        </nav>
        <Panel />
      </div>
    </header>
  );
};

const Panel = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Navigation Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-xs sm:max-w-xs">
        <nav className="flex flex-col items-center gap-4">
          <SheetClose asChild>
            <Logo />
          </SheetClose>
          <PanelRoutes />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export { Navbar };
