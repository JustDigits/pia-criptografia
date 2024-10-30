import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UseFormProps } from 'react-hook-form';

import { toBigInt } from './utils';

import {
  DEFAULT_P,
  DEFAULT_Q,
  DEFAULT_E,
  SMALLEST_VALID_PRIME,
} from '../const';

import { isPrime } from '../actions/miller-rabin';

type RSAParameters = z.infer<typeof RSAParametersSchema>;

const RSAParametersSchema = z
  .object({
    primes: z.object({
      p: toBigInt
        .pipe(
          z.coerce
            .bigint()
            .gte(
              SMALLEST_VALID_PRIME,
              `Debe ser un entero mayor o igual a ${SMALLEST_VALID_PRIME}.`
            )
        )
        .refine((p) => isPrime(p), {
          message:
            'El número elegido probablemente no sea primo (se corrieron 40 iteraciones del Test de Primalidad de Miller-Rabin).',
        }),
      q: toBigInt
        .pipe(
          z.coerce
            .bigint()
            .gte(
              SMALLEST_VALID_PRIME,
              `Debe ser un entero mayor o igual a ${SMALLEST_VALID_PRIME}.`
            )
        )
        .refine((p) => isPrime(p), {
          message:
            'El número elegido probablemente no sea primo (se corrieron 40 iteraciones del Test de Primalidad de Miller-Rabin).',
        }),
    }),
    e: toBigInt
      .transform((e) => (e === 0n ? undefined : e))
      .refine((e) => e === undefined || e >= 3n, {
        message: 'Debe ser un entero mayor o igual a 3.',
      })
      .optional(),
  })
  .refine(({ primes }) => BigInt(primes.p) !== BigInt(primes.q), {
    message: 'Los números primos elegidos no deben ser iguales.',
    path: ['primes.q'],
  });

const RSA_PARAMETERS_DEFAULT_VALUES: RSAParameters = {
  primes: {
    p: DEFAULT_P,
    q: DEFAULT_Q,
  },
  e: DEFAULT_E,
};

const RSAParametersSchemaOptions: UseFormProps<RSAParameters> = {
  resolver: zodResolver(RSAParametersSchema),
  defaultValues: RSA_PARAMETERS_DEFAULT_VALUES,
};

export {
  type RSAParameters,
  RSAParametersSchema,
  RSAParametersSchemaOptions,
  RSA_PARAMETERS_DEFAULT_VALUES,
};
