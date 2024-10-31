'use client';

import { InlineMath } from 'react-katex';

import {
  SingleAlgorithmParametersAlert,
  DecryptionForm,
} from '@/components/algorithms';

import { type RSAKeyPair } from '../schemas/rsa-key-pair';

import { decryptMessage } from '../actions/decryption';

type RSADecryptionFormProps = {
  private_key: RSAKeyPair['private_key'];
};

const RSADecryptionForm = ({ private_key }: RSADecryptionFormProps) => {
  const RSADecryptionFunction = (ciphertext: string) =>
    decryptMessage(ciphertext, private_key);

  return (
    <div className="grid gap-6">
      <SingleAlgorithmParametersAlert>
        Se está utilizando la llave privada&nbsp;
        <InlineMath>{`d = (${private_key.d}, ${private_key.n})`}</InlineMath>
      </SingleAlgorithmParametersAlert>
      <DecryptionForm decryptionFunction={RSADecryptionFunction} />
    </div>
  );
};

export { RSADecryptionForm };
