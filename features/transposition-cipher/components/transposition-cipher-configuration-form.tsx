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

import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const form = useForm<TranspositionCipherParameters>(
    TranspositionCipherParametersSchemaOptions
  );

  const onSubmit = (data: TranspositionCipherParameters) => {
    setParameters(data);

    toast({
      title: '¡Éxito!',
      description:
        'Los parámetros especificados han sido guardados y serán utilizados para los procesos de encriptación y desencriptación.',
      variant: 'success',
    });
  };

  return (
    <div className="grid gap-6">
      <AlgorithmParametersForm>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex gap-6 flex-col md:flex-row">
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
              <FormField
                control={form.control}
                name="paddingCharacter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carácter de Relleno</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="-"
                        className="w-full md:w-fit"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full md:w-fit">
              Guardar Configuración
            </Button>
          </form>
        </Form>
      </AlgorithmParametersForm>
      <CurrentAlgorithmParametersAlert>
        <ul className="list-disc pl-8">
          <li>Palabra Clave: "{parameters.keyword}"</li>
          <li>Carácter de Relleno: "{parameters.paddingCharacter}"</li>
        </ul>
      </CurrentAlgorithmParametersAlert>
    </div>
  );
};

export { TranspositionCipherConfigurationForm };
