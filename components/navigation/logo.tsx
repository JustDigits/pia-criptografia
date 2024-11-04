import Link from 'next/link';
import { Fragment } from 'react';

import { SheetClose } from '@/components/ui/sheet';

type LogoProps = {
  withSheetClose?: boolean;
};

const Logo = ({ withSheetClose = false }: LogoProps) => {
  const [Wrapper, wrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [Fragment, {}];

  return (
    <Wrapper {...wrapperProps}>
      <Link href="/" className="text-2xl font-semibold">
        Criptografía
      </Link>
    </Wrapper>
  );
};

export { Logo };
