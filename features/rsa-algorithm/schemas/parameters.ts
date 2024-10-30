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
              `Must be an integer greater than or equal to ${SMALLEST_VALID_PRIME}.`
            )
        )
        .refine((p) => isPrime(p), {
          message:
            'Chosen number is probably not prime (ran 40 iterations of the Miller-Rabin Primality Test).',
        }),
      q: toBigInt
        .pipe(
          z.coerce
            .bigint()
            .gte(
              SMALLEST_VALID_PRIME,
              `Must be an integer greater than or equal to ${SMALLEST_VALID_PRIME}.`
            )
        )
        .refine((p) => isPrime(p), {
          message:
            'Chosen number is probably not prime (ran 40 iterations of the Miller-Rabin Primality Test).',
        }),
    }),
    e: toBigInt
      .transform((e) => (e === 0n ? undefined : e))
      .refine((e) => e === undefined || e >= 3n, {
        message: 'Must be an integer greater than or equal to 3.',
      })
      .optional(),
  })
  .refine(({ primes }) => BigInt(primes.p) !== BigInt(primes.q), {
    message: 'Chosen primes must not be equal.',
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
