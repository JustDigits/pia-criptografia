import { z } from 'zod';

const toNumber = z.union([z.number(), z.string()]).pipe(
  z.coerce.number({
    invalid_type_error: 'Debe ser un número.',
  })
);

const toBigInt = z.union([toNumber, z.bigint()]).pipe(z.coerce.bigint());

export { toBigInt };
