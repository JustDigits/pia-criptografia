import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UseFormProps } from 'react-hook-form';

type EncryptionMessages = z.infer<typeof EncryptionMessagesSchema>;

const EncryptionMessagesSchema = z.object({
  plaintext: z.string().trim().min(1, 'El mensaje que se encriptará es obligatorio.'),
  ciphertext: z.string(),
});

const EncryptionMessagesSchemaOptions: UseFormProps<EncryptionMessages> = {
  resolver: zodResolver(EncryptionMessagesSchema),
  defaultValues: {
    plaintext: '',
    ciphertext: '',
  },
};

export {
  type EncryptionMessages,
  EncryptionMessagesSchema,
  EncryptionMessagesSchemaOptions,
};
