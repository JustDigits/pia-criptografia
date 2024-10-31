import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UseFormProps } from 'react-hook-form';

type DecryptionMessages = z.infer<typeof DecryptionMessagesSchema>;

const DecryptionMessagesSchema = z.object({
  ciphertext: z.string().min(1, 'El mensaje encriptado es obligatorio.'),
  plaintext: z.string(),
});

const DecryptionMessagesSchemaOptions: UseFormProps<DecryptionMessages> = {
  resolver: zodResolver(DecryptionMessagesSchema),
  defaultValues: {
    ciphertext: '',
    plaintext: '',
  },
};

export {
  type DecryptionMessages,
  DecryptionMessagesSchema,
  DecryptionMessagesSchemaOptions,
};
