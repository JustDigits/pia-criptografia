import { InlineMath } from 'react-katex';

import { Heading } from '@/components/ui/heading';

const RSAEncryptionDescription = () => {
  return (
    <Heading>
      <Heading.Title>Encriptación RSA</Heading.Title>
      <Heading.Description>
        Se utiliza la llave pública para cifrar el mensaje&nbsp;
        <InlineMath>m</InlineMath>, convirtiendo el texto plano al texto
        cifrado&nbsp;
        <InlineMath>c</InlineMath>. La operación que se lleva a cabo es&nbsp;
        <InlineMath>{`c = m^e\\;(\\textnormal{mód } n)`}</InlineMath>.
      </Heading.Description>
    </Heading>
  );
};

export { RSAEncryptionDescription };
