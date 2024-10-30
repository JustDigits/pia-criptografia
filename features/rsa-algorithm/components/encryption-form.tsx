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

import { type KeyPair } from '../schemas/key-pair';
import {
  type EncryptionMessages,
  EncryptionMessagesSchemaOptions,
} from '../schemas/encryption-messages';

import { encryptMessage } from '../actions/encryption';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InlineMath } from 'react-katex';

type MessagesEncryptionFormProps = {
  public_key: KeyPair['public_key'];
};

const EncryptionForm = ({ public_key }: MessagesEncryptionFormProps) => {
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
              {`Using public key `}
              <InlineMath>{`e = (${public_key.e}, ${public_key.n})`}</InlineMath>
            </AlertDescription>
          </Alert>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="plaintext"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plain Text Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your message..." {...field} />
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
                  <FormLabel>Encrypted Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Encrypted message will appear here..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export { EncryptionForm };