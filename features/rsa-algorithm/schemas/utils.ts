import { z } from 'zod';

const toNumber = z.union([z.number(), z.string()]).pipe(
  z.coerce.number({
    invalid_type_error: 'Must be a number.',
  })
);

const toBigInt = z.union([toNumber, z.bigint()]).pipe(z.coerce.bigint());

export { toBigInt };
