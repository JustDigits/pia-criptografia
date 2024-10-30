import { modular_exponentiation } from './math-utils';

function convertTextToCodePoint(text: string) {
  const codePointText: number[] = [];

  for (const codePoint of text) {
    codePointText.push(codePoint.codePointAt(0)!);
  }

  return codePointText;
}

function endecryptCodePointText(
  codePointText: number[],
  key: bigint,
  modulus: bigint
) {
  const endecryptedCodePointText: number[] = [];

  for (let i = 0; i < codePointText.length; i++) {
    endecryptedCodePointText[i] = Number(
      modular_exponentiation(BigInt(codePointText[i]), key, modulus)
    );
  }

  return endecryptedCodePointText;
}

function convertCodePointToText(text: number[]) {
  const stringifiedText: string[] = [];

  for (const num of text) {
    stringifiedText.push(String.fromCodePoint(num));
  }

  return stringifiedText.join('');
}

export {
  convertTextToCodePoint,
  endecryptCodePointText,
  convertCodePointToText,
};
