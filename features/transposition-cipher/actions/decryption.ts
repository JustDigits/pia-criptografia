import { padText } from './text-utils';

function decryptMessage(
  ciphertext: string,
  keyword: string,
  paddingCharacter: string
) {
  const rows = Math.ceil(ciphertext.length / keyword.length);
  const columns = keyword.length;

  const sortedKeyword = keyword.split('').sort().join('');

  let orderedCiphertext = '';
  for (const char of keyword) {
    const i = sortedKeyword.indexOf(char);
    const offset = rows * i;

    orderedCiphertext += ciphertext.substring(offset, offset + rows);
  }

  orderedCiphertext = padText(
    orderedCiphertext,
    paddingCharacter,
    rows,
    columns
  );

  let plaintext = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      plaintext += orderedCiphertext[j * rows + i];
    }
  }

  return plaintext;
}

export { decryptMessage };
