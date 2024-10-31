function decryptMessage(ciphertext: string, keyword: string) {
  const rows = Math.ceil(ciphertext.length / keyword.length);
  const columns = keyword.length;

  console.log(':' + ciphertext + ':');
  console.log(ciphertext);

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
