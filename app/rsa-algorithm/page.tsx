'use client';

import 'katex/dist/katex.min.css';

import { useState } from 'react';

import {
  KeyGenerationDescription,
  KeyGenerationForm,
  EncryptionDescription,
  EncryptionForm,
  DecryptionDescription,
  DecryptionForm,
} from '@/features/rsa-algorithm/components';

import {
  type AlgorithmParameters,
  ALGORITHM_PARAMETERS_DEFAULT_VALUES,
} from '@/features/rsa-algorithm/schemas/parameters';
import {
  type KeyPair,
  KEY_PAIR_DEFAULT_VALUES,
} from '@/features/rsa-algorithm/schemas/key-pair';

export default function RSAAlgorithmPage() {
  const [keys, setKeys] = useState<KeyPair>(KEY_PAIR_DEFAULT_VALUES);
  const [parameters, setParameters] = useState<AlgorithmParameters>(
    ALGORITHM_PARAMETERS_DEFAULT_VALUES
  );

  return (
    <main className="w-full container my-8 font-[family-name:var(--font-geist-sans)] space-y-9">
      <KeyGenerationDescription />
      <KeyGenerationForm
        parameters={parameters}
        setParameters={setParameters}
        setKeys={setKeys}
      />
      <EncryptionDescription />
      <EncryptionForm public_key={keys.public_key} />
      <DecryptionDescription />
      <DecryptionForm private_key={keys.private_key} />
    </main>
  );
}
