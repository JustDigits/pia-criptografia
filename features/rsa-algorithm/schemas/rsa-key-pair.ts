import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UseFormProps } from 'react-hook-form';

import { toBigInt } from './utils';

import { DEFAULT_D, DEFAULT_E, DEFAULT_N, SMALLEST_VALID_N } from '../const';

type RSAKeyPair = z.infer<typeof RSAKeyPairSchema>;

const RSA_KEY_PAIR_DEFAULT_VALUES: RSAKeyPair = {
  public_key: {
    e: DEFAULT_E,
    n: DEFAULT_N,
  },
  private_key: {
    d: DEFAULT_D,
    n: DEFAULT_N,
  },
};

const RSAKeyPairSchema = z.object({
  public_key: z.object({
    e: toBigInt.pipe(
      z.coerce.bigint().gte(3n, 'Debe ser un entero mayor o igual a 3.')
    ),
    n: toBigInt.pipe(
      z.coerce
        .bigint()
        .gte(
          SMALLEST_VALID_N,
          `Debe ser un entero mayor o igual a ${SMALLEST_VALID_N}.`
        )
    ),
  }),
  private_key: z.object({
    d: toBigInt.pipe(
      z.coerce.bigint().gte(3n, 'Debe ser un entero mayor o igual a 3.')
    ),
    n: toBigInt.pipe(
      z.coerce
        .bigint()
        .gte(
          SMALLEST_VALID_N,
          `Debe ser un entero mayor o igual a ${SMALLEST_VALID_N}.`
        )
    ),
  }),
});

const RSAKeyPairSchemaOptions: UseFormProps<RSAKeyPair> = {
  resolver: zodResolver(RSAKeyPairSchema),
  defaultValues: RSA_KEY_PAIR_DEFAULT_VALUES,
};

export {
  type RSAKeyPair,
  RSAKeyPairSchema,
  RSAKeyPairSchemaOptions,
  RSA_KEY_PAIR_DEFAULT_VALUES,
};
