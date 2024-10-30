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
  type DecryptionMessages,
  DecryptionMessagesSchemaOptions,
} from '../schemas/decryption-messages';

import { decryptMessage } from '../actions/decryption';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InlineMath } from 'react-katex';

type MessagesEncryptionFormProps = {
  private_key: KeyPair['private_key'];
};

const DecryptionForm = ({ private_key }: MessagesEncryptionFormProps) => {
  const form = useForm<DecryptionMessages>(DecryptionMessagesSchemaOptions);

  const onSubmit = (data: DecryptionMessages) => {
    const { ciphertext } = data;
    const plaintext = decryptMessage(ciphertext, private_key);

    form.setValue('plaintext', plaintext);
  };

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Alert variant="informative">
            <AlertDescription>
              {`Using private key `}
              <InlineMath>{`d = (${private_key.d}, ${private_key.n})`}</InlineMath>
            </AlertDescription>
          </Alert>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ciphertext"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Encrypted Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter encrypted message..."
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
                  <FormLabel>Plain Text Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Decrypted message will appear here..."
                      {...field}
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

export { DecryptionForm };
