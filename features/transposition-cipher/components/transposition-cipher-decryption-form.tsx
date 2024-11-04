'use client';

import {
  SingleAlgorithmParametersAlert,
  DecryptionForm,
} from '@/components/algorithms';

import { type TranspositionCipherParameters } from '../schemas/parameters';

import { decryptMessage } from '../actions/decryption';

type TranspositionCipherDecryptionFormProps = {
  parameters: TranspositionCipherParameters;
};

const TranspositionCipherDecryptionForm = ({
  parameters,
}: TranspositionCipherDecryptionFormProps) => {
  const TranspositionCipherDecryption = (ciphertext: string) =>
    decryptMessage(ciphertext, parameters.keyword);

  return (
    <div className="grid gap-6">
      <SingleAlgorithmParametersAlert>
        Se está utilizando la palabra clave "{parameters.keyword}" con el
        carácter de relleno "{parameters.paddingCharacter}".
      </SingleAlgorithmParametersAlert>
      <DecryptionForm decryptionFunction={TranspositionCipherDecryption} />
    </div>
  );
};

export { TranspositionCipherDecryptionForm };
