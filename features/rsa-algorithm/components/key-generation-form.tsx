'use client';

import { InlineMath } from 'react-katex';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { type KeyPair } from '../schemas/key-pair';
import {
  type AlgorithmParameters,
  AlgorithmParametersSchemaOptions,
} from '../schemas/parameters';

import { generateKeyPair } from '../actions/rsa';

type KeyGenerationFormProps = {
  parameters: AlgorithmParameters;
  setParameters: React.Dispatch<React.SetStateAction<AlgorithmParameters>>;
  setKeys: React.Dispatch<React.SetStateAction<KeyPair>>;
};

const KeyGenerationForm = ({
  parameters,
  setParameters,
  setKeys,
}: KeyGenerationFormProps) => {
  const form = useForm<AlgorithmParameters>(AlgorithmParametersSchemaOptions);

  const onSubmit = (data: AlgorithmParameters) => {
    const keypair = generateKeyPair(data);

    setParameters({ ...data, e: keypair.public_key.e });
    setKeys(keypair);
  };

  return (
    <div className="grid gap-6">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Algorithm Configuration</CardTitle>
          <CardDescription>
            Set the algorithm's initial parameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="primes.p"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Prime Number <InlineMath>p</InlineMath>
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
                        Prime Number <InlineMath>q</InlineMath>
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
                        Public Key Number <InlineMath>e</InlineMath>
                        <span className="ml-1 text-muted-foreground">
                          (Optional)
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
                        The algorithm will attempt to use this number for the
                        public key. If invalid, a predetermined number will be
                        chosen.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full md:w-fit">
                Generate Key Pair
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Alert variant="informative">
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Notice!</AlertTitle>
        <AlertDescription>
          Currently using the following configuration:
          <ul className="list-disc pl-8">
            <li>
              <InlineMath>{`p = ${parameters.primes.p}`}</InlineMath>
            </li>
            <li>
              <InlineMath>{`q = ${parameters.primes.q}`}</InlineMath>
            </li>
            <li>
              <InlineMath>{`e = ${
                parameters.e ?? '\\textnormal{Randomly chosen}'
              }`}</InlineMath>
            </li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export { KeyGenerationForm };
