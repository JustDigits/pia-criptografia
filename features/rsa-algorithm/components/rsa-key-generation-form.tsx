'use client';

import { InlineMath } from 'react-katex';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  AlgorithmParametersForm,
  CurrentAlgorithmParametersAlert,
} from '@/components/algorithms';

import { type RSAKeyPair } from '../schemas/rsa-key-pair';
import {
  type RSAParameters,
  RSAParametersSchemaOptions,
} from '../schemas/parameters';

import { generateKeyPair } from '../actions/key-generation';

type KeyGenerationFormProps = {
  parameters: RSAParameters;
  keys: RSAKeyPair;
  setParameters: React.Dispatch<React.SetStateAction<RSAParameters>>;
  setKeys: React.Dispatch<React.SetStateAction<RSAKeyPair>>;
};

const RSAKeyGenerationForm = ({
  keys,
  parameters,
  setParameters,
  setKeys,
}: KeyGenerationFormProps) => {
  const form = useForm<RSAParameters>(RSAParametersSchemaOptions);

  const onSubmit = (data: RSAParameters) => {
    const keypair = generateKeyPair(data);

    setParameters({ ...data, e: keypair.public_key.e });
    setKeys(keypair);
  };

  return (
    <div className="grid gap-6">
      <AlgorithmParametersForm>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="primes.p"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Número Primo <InlineMath>p</InlineMath>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="5"
                        value={field.value.toString()}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primes.q"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Número Primo <InlineMath>q</InlineMath>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="11"
                        value={field.value.toString()}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="e"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Llave Pública <InlineMath>e</InlineMath>
                      <span className="ml-1 text-muted-foreground">
                        (Opcional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="3"
                        value={field.value?.toString() || ''}
                      />
                    </FormControl>
                    <FormDescription>
                      El algoritmo intentará usar este número para la llave
                      pública. Si es invalido, un número predeterminado será
                      elegido en su lugar.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full md:w-fit">
              Generar Llaves
            </Button>
          </form>
        </Form>
      </AlgorithmParametersForm>
      <CurrentAlgorithmParametersAlert>
        <ul className="list-disc pl-8">
          <li>
            <InlineMath>{`p = ${parameters.primes.p}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`q = ${parameters.primes.q}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`e = ${
              keys.public_key.e ?? '\\textnormal{Aleatoriamente elegida}'
            }`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`d = ${
              keys.private_key.d ?? '\\textnormal{Será calculada}'
            }`}</InlineMath>
          </li>
        </ul>
      </CurrentAlgorithmParametersAlert>
    </div>
  );
};

export { RSAKeyGenerationForm };
