import { type KeyPair } from '../schemas/key-pair';

import { modular_exponentiation } from './math-utils';

function encryptMessage(plaintext: string, public_key: KeyPair['public_key']) {
  const e = public_key.e;
  const n = public_key.n;

  // Convert plaintext to bytes
  const encoder = new TextEncoder();
  const plaintextBytes = encoder.encode(plaintext);

  // Calculate block size
  const nBits = n.toString(2).length;
  const blockSize = nBits > 8 ? Math.floor((nBits - 1) / 8) : 1; // bytes per block

  // Split plaintext into blocks
  const blocks = [];
  for (let i = 0; i < plaintextBytes.length; i += blockSize) {
    blocks.push(plaintextBytes.slice(i, i + blockSize));
  }

  // Encrypt each block
  const ciphertexts = blocks.map((block) => {
    let M_block = BigInt(0);
    for (let byte of block) {
      M_block = (M_block << BigInt(8)) + BigInt(byte);
    }
    const C = modular_exponentiation(M_block, e, n);
    console.log(`${M_block} ==> ${C}`);

    return C.toString(16); // Hexadecimal representation
  });

  console.log('ENCRPT: ', JSON.stringify(ciphertexts));

  return Buffer.from(JSON.stringify(ciphertexts)).toString('base64');
}

export { encryptMessage };
