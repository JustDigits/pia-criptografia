import { type RSAKeyPair } from '../schemas/rsa-key-pair';
import { type RSAParameters } from '../schemas/parameters';

import { nmod, gcd, extended_gcd } from './math-utils';

import { KeyGenerationError } from '../errors';

function generateKeyPair(parameters: RSAParameters): RSAKeyPair {
  try {
    const [p, q] = [parameters.primes.p, parameters.primes.q];

    const n = p * q;
    const phi_n = (p - 1n) * (q - 1n);

    const e = getPublicKeyInteger(phi_n, parameters.e);
    const d = calculateMultiplicativeInverse(phi_n, e);

    return {
      public_key: {
        e: e,
        n: n,
      },
      private_key: {
        d: d,
        n: n,
      },
    };
  } catch (error) {
    if (error instanceof KeyGenerationError) {
      throw new KeyGenerationError(error.name, error.message);
    } else {
      throw new KeyGenerationError(
        'UNKNOWN_ERROR',
        'No se pudo generar el par de llaves.'
      );
    }
  }
}

function getPublicKeyInteger(phi_n: bigint, e: bigint | undefined) {
  const DEFAULT_E = 65537n;

  if (e && e < phi_n && isCoprime(phi_n, e)) return e;
  if (DEFAULT_E < phi_n && isCoprime(phi_n, DEFAULT_E)) return DEFAULT_E;

  for (let e = 3n; e < 1000; e += 2n) {
    if (isCoprime(phi_n, e)) return e;
  }

  throw new KeyGenerationError(
    'INVALID_PUBLIC_KEY_E',
    "Incapaz de calcular un valor válido para el número de llave pública 'e'."
  );
}

function isCoprime(phi_n: bigint, e: bigint) {
  return gcd(phi_n, e) === 1n;
}

function calculateMultiplicativeInverse(phi_n: bigint, e: bigint) {
  const { bezout_coefficients } = extended_gcd(phi_n, e);

  return nmod(bezout_coefficients[1], phi_n);
}

export { generateKeyPair };
