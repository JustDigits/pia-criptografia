import { Heading } from '@/components/ui/heading';

const TranspositionCipherEncryptionDescription = () => {
  return (
    <Heading>
      <Heading.Title>Encriptación por Transposición</Heading.Title>
      <Heading.Description>
        Se reorganizan los caracteres del texto plano de acuerdo al orden
        determinado por la palabra clave para producir un texto cifrado que
        parece codificado, pero que contiene los mismos caracteres que el
        mensaje original.
      </Heading.Description>
    </Heading>
  );
};

export { TranspositionCipherEncryptionDescription };
