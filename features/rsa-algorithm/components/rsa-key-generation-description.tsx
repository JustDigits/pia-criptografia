import { InlineMath } from 'react-katex';

import { Heading } from '@/components/ui/heading';

const RSAKeyGenerationDescription = () => {
  return (
    <Heading>
      <Heading.Title>Generación de Llaves RSA</Heading.Title>
      <Heading.Description>
        El algoritmo RSA es un método criptográfico asimétrico que utiliza un
        par de llaves pública <InlineMath>(e,n)</InlineMath> y privada{' '}
        <InlineMath>(d,n)</InlineMath> generado a partir de dos números primos
        grandes para cifrar y descifrar datos de forma segura.
      </Heading.Description>
    </Heading>
  );
};

export { RSAKeyGenerationDescription };
