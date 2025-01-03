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
  type DecryptionMessages,
  DecryptionMessagesSchemaOptions,
} from '@/schemas/decryption-messages';

import { DecryptionError as TranspositionDecryptionError } from '@/features/transposition-cipher/errors';

import { useToast } from '@/hooks/use-toast';

type DecryptionFormProps = {
  decryptionFunction: (ciphertext: string) => string;
};

const DecryptionForm = ({ decryptionFunction }: DecryptionFormProps) => {
  const { toast } = useToast();
  const form = useForm<DecryptionMessages>(DecryptionMessagesSchemaOptions);

  const onSubmit = (data: DecryptionMessages) => {
    try {
      const { ciphertext } = data;
      const plaintext = decryptionFunction(ciphertext);
      form.setValue('plaintext', plaintext);
    } catch (error) {
      if (error instanceof TranspositionDecryptionError) {
        toast({
          title: '¡Algo salió mal!',
          description: error.message,
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="ciphertext"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto Cifrado</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Ingrese su mensaje encriptado..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="plaintext"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto Plano</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Aquí aparecerá el mensaje desencriptado..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full md:w-fit">
          Desencriptar Mensaje
        </Button>
      </form>
    </Form>
  );
};

export { DecryptionForm };
