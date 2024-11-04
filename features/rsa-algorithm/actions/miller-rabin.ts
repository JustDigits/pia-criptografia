import { modular_exponentiation } from './math-utils';

// @see https://www.geeksforgeeks.org/primality-test-set-3-miller-rabin/
function isPrime(n: bigint, k = 40) {
  if (n <= 1n) return false;
  if (n <= 3n) return true;

  if (n % 2n === 0n) return false;

  let r = 0;
  let d = n - 1n;
  while (d % 2n === 0n) {
    d /= 2n;
    r++;
  }

  for (let i = 0; i < k; i++) {
    if (!millerRabinPrimalityTest(n, d, r)) return false;
  }

  return true;
}

function millerRabinPrimalityTest(n: bigint, d: bigint, r: number) {
  const max =
    n >= BigInt(Number.MAX_SAFE_INTEGER) ? Number.MAX_SAFE_INTEGER : Number(n);
  const a = BigInt(randomIntInRange(2, max));

  let x = modular_exponentiation(a, d, n);
  if (x === 1n || x === n - 1n) return true;

  for (let i = 0; i < r; i++) {
    x = modular_exponentiation(x, 2n, n);

    if (x === 1n) return false;
    if (x === n - 1n) return true;
  }

  return false;
}

function randomIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export { isPrime };
