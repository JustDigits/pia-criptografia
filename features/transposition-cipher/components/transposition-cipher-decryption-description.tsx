import { Heading } from '@/components/ui/heading';

const TranspositionCipherDecryptionDescription = () => {
  return (
    <Heading>
      <Heading.Title>Desencriptación por Transposición</Heading.Title>
      <Heading.Description>Se invierte el proceso de reorganización determinado por la palabra clave para restaurar el orden original de los caracteres y obtener el texto plano.</Heading.Description>
    </Heading>
  );
};

export { TranspositionCipherDecryptionDescription };
