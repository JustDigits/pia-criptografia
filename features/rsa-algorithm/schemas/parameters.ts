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

import { isPrime } from '@/features/rsa-algorithm/actions/miller-rabin';

type AlgorithmParameters = z.infer<typeof AlgorithmParametersSchema>;

const ALGORITHM_PARAMETERS_DEFAULT_VALUES: AlgorithmParameters = {
  primes: {
    p: DEFAULT_P,
    q: DEFAULT_Q,
  },
  e: DEFAULT_E,
};

const AlgorithmParametersSchema = z
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

const AlgorithmParametersSchemaOptions: UseFormProps<AlgorithmParameters> = {
  resolver: zodResolver(AlgorithmParametersSchema),
  defaultValues: ALGORITHM_PARAMETERS_DEFAULT_VALUES,
};

export {
  type AlgorithmParameters,
  AlgorithmParametersSchema,
  AlgorithmParametersSchemaOptions,
  ALGORITHM_PARAMETERS_DEFAULT_VALUES,
};
