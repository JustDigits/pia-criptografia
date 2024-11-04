import { PanelLeftIcon as PanelIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Logo } from './logo';
import { Routes } from './routes';
import { cn } from '@/lib/utils';

const PrintCodeButton = ({ className }: { className?: string }) => {
  return (
    <a
      target="_blank"
      className={cn('w-full sm:w-fit', className)}
      href="https://github.com/JustDigits/pia-criptografia/archive/refs/heads/main.zip"
    >
      <Button size="sm" className="w-full">
        Imprimir Código
      </Button>
    </a>
  );
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center justify-between sm:justify-start">
        <Logo />
        <nav className="space-x-4 hidden ml-4 sm:flex sm:items-center md:ml-8">
          <Routes />
        </nav>
        <PrintCodeButton className="ml-auto hidden sm:inline-block" />
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
          <span className="sr-only">Alternar el menú de navegación</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="max-w-xs flex flex-col items-center sm:max-w-xs"
      >
        <SheetTitle className="sr-only">Panel de Navegación</SheetTitle>
        <SheetDescription className="sr-only">
          Panel de navegación
        </SheetDescription>
        <Logo withSheetClose />
        <nav className="flex flex-col items-center gap-4">
          <Routes withSheetClose />
        </nav>
        <PrintCodeButton className="mt-auto" />
      </SheetContent>
    </Sheet>
  );
};

export { Navbar };
