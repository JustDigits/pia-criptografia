'use client';

import 'katex/dist/katex.min.css';

import { useState } from 'react';

import {
  RSAKeyGenerationDescription,
  RSAKeyGenerationForm,
  RSAEncryptionDescription,
  RSAEncryptionForm,
  RSADecryptionDescription,
  RSADecryptionForm,
} from '@/features/rsa-algorithm/components';

import {
  type RSAParameters,
  RSA_PARAMETERS_DEFAULT_VALUES,
} from '@/features/rsa-algorithm/schemas/parameters';
import {
  type RSAKeyPair,
  RSA_KEY_PAIR_DEFAULT_VALUES,
} from '@/features/rsa-algorithm/schemas/rsa-key-pair';

export default function RSAAlgorithmPage() {
  const [keys, setKeys] = useState<RSAKeyPair>(RSA_KEY_PAIR_DEFAULT_VALUES);
  const [parameters, setParameters] = useState<RSAParameters>(
    RSA_PARAMETERS_DEFAULT_VALUES
  );

  return (
    <div className="space-y-9">
      <RSAKeyGenerationDescription />
      <RSAKeyGenerationForm
        keys={keys}
        parameters={parameters}
        setKeys={setKeys}
        setParameters={setParameters}
      />
      <RSAEncryptionDescription />
      <RSAEncryptionForm public_key={keys.public_key} />
      <RSADecryptionDescription />
      <RSADecryptionForm private_key={keys.private_key} />
    </div>
  );
}
