import { type KeyPair } from '../schemas/key-pair';
import { type AlgorithmParameters } from '../schemas/parameters';

import { nmod, gcd, extended_gcd } from './math-utils';

function generateKeyPair(parameters: AlgorithmParameters): KeyPair {
  const [p, q] = [parameters.primes.p, parameters.primes.q];

  const n = p * q;
  const phi_n = (p - 1n) * (q - 1n);

  const e =
    parameters.e && isCoprime(phi_n, parameters.e)
      ? parameters.e
      : getPublicKeyInteger(phi_n);

  console.log(e);

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
}

function getPublicKeyInteger(phi_n: bigint) {
  const DEFAULT_E = 65537n;
  if (isCoprime(phi_n, DEFAULT_E)) return DEFAULT_E;

  for (let e = 3n; e < 1000; e += 2n) {
    if (isCoprime(phi_n, e)) return e;
  }

  // TODO: THROW ERROR
  return DEFAULT_E;
}

function isCoprime(phi_n: bigint, e: bigint) {
  return gcd(phi_n, e) === 1n;
}

function calculateMultiplicativeInverse(phi_n: bigint, e: bigint) {
  const { bezout_coefficients } = extended_gcd(phi_n, e);

  return nmod(bezout_coefficients[1], phi_n);
}

export { generateKeyPair };
