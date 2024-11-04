'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  type EncryptionMessages,
  EncryptionMessagesSchemaOptions,
} from '@/schemas/encryption-messages';

type EncryptionFormProps = {
  encryptionFunction: (plaintext: string) => string;
};

const EncryptionForm = ({ encryptionFunction }: EncryptionFormProps) => {
  const form = useForm<EncryptionMessages>(EncryptionMessagesSchemaOptions);

  const onSubmit = (data: EncryptionMessages) => {
    const { plaintext } = data;
    const ciphertext = encryptionFunction(plaintext);

    form.setValue('ciphertext', ciphertext);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="plaintext"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto Plano</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ingrese su mensaje..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ciphertext"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto Cifrado</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Aquí aparecerá el mensaje encriptado..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full md:w-fit">
          Encriptar Mensaje
        </Button>
      </form>
    </Form>
  );
};

export { EncryptionForm };
