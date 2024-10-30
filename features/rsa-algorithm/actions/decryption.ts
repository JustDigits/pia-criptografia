import { type KeyPair } from '../schemas/key-pair';

import { modular_exponentiation } from './math-utils';

function decryptMessage(
  ciphertext: string,
  private_key: KeyPair['private_key']
) {
  const d = private_key.d;
  const n = private_key.n;

  console.log(ciphertext);

  const test = Buffer.from(ciphertext, 'base64').toString();

  console.log('DECRYPT: ', test);

  const ciphertexts: string[] = JSON.parse(
    Buffer.from(ciphertext, 'base64').toString('utf-8')
  );

  // Decrypt each ciphertext block
  const decryptedBytes = [];
  for (let ciphertextHex of ciphertexts) {
    const C = BigInt('0x' + ciphertextHex);
    const M_block = modular_exponentiation(C, d, n);
    console.log(`${C} ==> ${M_block}`);

    // Convert M_block back to bytes
    const blockBytes = [];
    let temp = M_block;
    while (temp > 0) {
      blockBytes.unshift(Number(temp % BigInt(256)));
      temp = temp >> BigInt(8);
    }
    decryptedBytes.push(...blockBytes);
  }

  // Convert decrypted bytes back to string
  const decoder = new TextDecoder();
  const decryptedText = decoder.decode(Uint8Array.from(decryptedBytes));

  return decryptedText;
}

export { decryptMessage };
