'use client';

import { useState } from 'react';

import {
  TranspositionCipherDescription,
  TranspositionCipherConfigurationForm,
  TranspositionCipherEncryptionDescription,
  TranspositionCipherEncryptionForm,
  TranspositionCipherDecryptionDescription,
  TranspositionCipherDecryptionForm,
} from '@/features/transposition-cipher/components';
import {
  type TranspositionCipherParameters,
  TRANSPOSITION_CIPHER_PARAMETERS_DEFAULT_VALUES,
} from '@/features/transposition-cipher/schemas/parameters';

export default function TranspositionCipherPage() {
  const [parameters, setParameters] = useState<TranspositionCipherParameters>(
    TRANSPOSITION_CIPHER_PARAMETERS_DEFAULT_VALUES
  );

  return (
    <div className="space-y-9">
      <TranspositionCipherDescription />
      <TranspositionCipherConfigurationForm
        parameters={parameters}
        setParameters={setParameters}
      />
      <TranspositionCipherEncryptionDescription />
      <TranspositionCipherEncryptionForm parameters={parameters} />
      <TranspositionCipherDecryptionDescription />
      <TranspositionCipherDecryptionForm parameters={parameters} />
    </div>
  );
}
