import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UseFormProps } from 'react-hook-form';

type TranspositionCipherParameters = z.infer<
  typeof TranspositionCipherParametersSchema
>;

const TranspositionCipherParametersSchema = z.object({
  keyword: z.string().trim().min(1, 'La palabra clave es obligatoria.'),
  paddingCharacter: z.string().min(1, 'El carácter de relleno es obligatorio.').max(1, "Debe introducirse únicamente un carácter (1)."),
});

const TRANSPOSITION_CIPHER_PARAMETERS_DEFAULT_VALUES: TranspositionCipherParameters =
  {
    keyword: 'DBAEC',
    paddingCharacter: '-',
  };

const TranspositionCipherParametersSchemaOptions: UseFormProps<TranspositionCipherParameters> =
  {
    resolver: zodResolver(TranspositionCipherParametersSchema),
    defaultValues: TRANSPOSITION_CIPHER_PARAMETERS_DEFAULT_VALUES,
  };

export {
  type TranspositionCipherParameters,
  TranspositionCipherParametersSchema,
  TranspositionCipherParametersSchemaOptions,
  TRANSPOSITION_CIPHER_PARAMETERS_DEFAULT_VALUES,
};
