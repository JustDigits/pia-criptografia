'use client';

import {
  SingleAlgorithmParametersAlert,
  EncryptionForm,
} from '@/components/algorithms';

import { type TranspositionCipherParameters } from '../schemas/parameters';

import { encryptMessage } from '../actions/encryption';

type TranspositionCipherEncryptionFormProps = {
  parameters: TranspositionCipherParameters;
};

const TranspositionCipherEncryptionForm = ({
  parameters,
}: TranspositionCipherEncryptionFormProps) => {
  const TranspositionCipherEncryption = (plaintext: string) =>
    encryptMessage(plaintext, parameters.keyword, parameters.paddingCharacter);

  return (
    <div className="grid gap-6">
      <SingleAlgorithmParametersAlert>
        Se está utilizando la palabra clave "{parameters.keyword}" con el
        carácter de relleno "{parameters.paddingCharacter}".
      </SingleAlgorithmParametersAlert>
      <EncryptionForm encryptionFunction={TranspositionCipherEncryption} />
    </div>
  );
};

export { TranspositionCipherEncryptionForm };
