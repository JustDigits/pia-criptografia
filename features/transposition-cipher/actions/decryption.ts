import { DecryptionError } from '../errors';

function decryptMessage(ciphertext: string, keyword: string) {
  const rows = Math.ceil(ciphertext.length / keyword.length);
  const columns = keyword.length;

  if (ciphertext.length % keyword.length !== 0) {
    throw new DecryptionError(
      'INVALID_KEYWORD_LENGTH',
      'La longitud del texto cifrado debe ser divisible por la longitud de la palabra clave.'
    );
  }

  const sortedKeyword = keyword.split('').sort().join('');

  let orderedCiphertext = '';
  for (const char of keyword) {
    const i = sortedKeyword.indexOf(char);
    const offset = rows * i;

    orderedCiphertext += ciphertext.substring(offset, offset + rows);
  }

  let plaintext = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      plaintext += orderedCiphertext[j * rows + i];
    }
  }

  return plaintext;
}

export { decryptMessage };
