'use client';

import { useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  AlgorithmParametersForm,
  CurrentAlgorithmParametersAlert,
} from '@/components/algorithms';

import {
  type TranspositionCipherParameters,
  TranspositionCipherParametersSchemaOptions,
} from '../schemas/parameters';

type TranspositionCipherParametersFormProps = {
  parameters: TranspositionCipherParameters;
  setParameters: React.Dispatch<
    React.SetStateAction<TranspositionCipherParameters>
  >;
};

const TranspositionCipherConfigurationForm = ({
  parameters,
  setParameters,
}: TranspositionCipherParametersFormProps) => {
  const form = useForm<TranspositionCipherParameters>(
    TranspositionCipherParametersSchemaOptions
  );

  const onSubmit = (data: TranspositionCipherParameters) => {
    setParameters(data);
  };

  return (
    <div className="grid gap-6">
      <AlgorithmParametersForm>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Palabra Clave</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="CRIPTO"
                      className="w-full md:w-fit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full md:w-fit">
              Guardar Configuración
            </Button>
          </form>
        </Form>
      </AlgorithmParametersForm>
      <CurrentAlgorithmParametersAlert>
        <ul className="list-disc pl-8">
          <li>
            <p>Palabra Clave: {parameters.keyword}</p>
          </li>
        </ul>
      </CurrentAlgorithmParametersAlert>
    </div>
  );
};

export { TranspositionCipherConfigurationForm };
