'use client';

import { InlineMath } from 'react-katex';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { type RSAKeyPair } from '../schemas/rsa-key-pair';
import {
  type EncryptionMessages,
  EncryptionMessagesSchemaOptions,
} from '../schemas/encryption-messages';

import { encryptMessage } from '../actions/encryption';

type MessagesEncryptionFormProps = {
  public_key: RSAKeyPair['public_key'];
};

const RSAEncryptionForm = ({ public_key }: MessagesEncryptionFormProps) => {
  const form = useForm<EncryptionMessages>(EncryptionMessagesSchemaOptions);

  const onSubmit = (data: EncryptionMessages) => {
    const { plaintext } = data;
    const ciphertext = encryptMessage(plaintext, public_key);

    form.setValue('ciphertext', ciphertext);
  };

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Alert variant="informative">
            <AlertDescription>
              {`Se está utilizando la llave pública `}
              <InlineMath>{`e = (${public_key.e}, ${public_key.n})`}</InlineMath>
            </AlertDescription>
          </Alert>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="plaintext"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Texto en Claro</FormLabel>
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
                  <FormLabel>Texto Encriptado</FormLabel>
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
    </div>
  );
};

export { RSAEncryptionForm };
