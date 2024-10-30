// negative mod, @see https://stackoverflow.com/a/17323608/26125480
function nmod(num: bigint, m: bigint) {
  return ((num % m) + m) % m;
}

function gcd(a: bigint, b: bigint) {
  if (a < b) [a, b] = [b, a];

  while (b != 0n) {
    [a, b] = [b, a % b];
  }

  return a;
}

function extended_gcd(a: bigint, b: bigint) {
  let [old_r, r] = [a, b];
  let [old_s, s] = [1n, 0n];
  let [old_t, t] = [0n, 1n];

  while (r != 0n) {
    let q = old_r / r;
    [old_r, r] = [r, old_r - q * r];
    [old_s, s] = [s, old_s - q * s];
    [old_t, t] = [t, old_t - q * t];
  }

  return {
    gcd: old_r,
    bezout_coefficients: [old_s, old_t],
    quotients: [s, t],
  };
}

function modular_exponentiation(
  base: bigint,
  exponent: bigint,
  modulus: bigint
) {
  let r = 1n;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2n === 1n) r = (r * base) % modulus;
    exponent = exponent / 2n;
    base = (base * base) % modulus;
  }

  return r;
}

export { nmod, gcd, extended_gcd, modular_exponentiation };
