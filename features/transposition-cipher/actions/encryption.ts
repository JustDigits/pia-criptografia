function encryptMessage(
  plaintext: string,
  keyword: string,
  paddingCharacter: string
) {
  const rows = Math.ceil(plaintext.length / keyword.length);
  const columns = keyword.length;

  const sortedKeyword = keyword.split('').sort().join('');
  const paddedPlaintext = padPlaintext(
    plaintext,
    paddingCharacter,
    rows,
    columns
  );

  let ciphertext = '';
  for (const char of sortedKeyword) {
    const i = keyword.indexOf(char);

    for (let j = 0; j < rows; j++) {
      ciphertext += paddedPlaintext[j * columns + i];
    }
  }

  return ciphertext;
}

function padPlaintext(
  plaintext: string,
  paddingCharacter: string,
  rows: number,
  columns: number
) {
  const amountOfPaddingNeeded = rows * columns - plaintext.length;
  const padding = paddingCharacter.repeat(amountOfPaddingNeeded);

  return plaintext + padding;
}

export { encryptMessage };
