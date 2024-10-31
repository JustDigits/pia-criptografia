import { padText } from './text-utils';

function encryptMessage(
  plaintext: string,
  keyword: string,
  paddingCharacter: string
) {
  const rows = Math.ceil(plaintext.length / keyword.length);
  const columns = keyword.length;

  const sortedKeyword = keyword.split('').sort().join('');
  const paddedPlaintext = padText(plaintext, paddingCharacter, rows, columns);

  let ciphertext = '';
  for (const char of sortedKeyword) {
    const i = keyword.indexOf(char);

    for (let j = 0; j < rows; j++) {
      ciphertext += paddedPlaintext[j * columns + i];
    }
  }

  return ciphertext;
}

export { encryptMessage };
