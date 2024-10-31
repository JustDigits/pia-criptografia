'use client';

import { InlineMath } from 'react-katex';

import {
  EncryptionForm,
  SingleAlgorithmParametersAlert,
} from '@/components/algorithms';

import { type RSAKeyPair } from '../schemas/rsa-key-pair';

import { encryptMessage } from '../actions/encryption';

type RSAEncryptionFormProps = {
  public_key: RSAKeyPair['public_key'];
};

const RSAEncryptionForm = ({ public_key }: RSAEncryptionFormProps) => {
  const RSAEncryption = (plaintext: string) =>
    encryptMessage(plaintext, public_key);

  return (
    <div className="grid gap-6">
      <SingleAlgorithmParametersAlert>
        Se está utilizando la llave pública&nbsp;
        <InlineMath>{`e = (${public_key.e}, ${public_key.n})`}</InlineMath>
      </SingleAlgorithmParametersAlert>
      <EncryptionForm encryptionFunction={RSAEncryption} />
    </div>
  );
};

export { RSAEncryptionForm };
