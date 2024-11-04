import { InlineMath } from 'react-katex';

import { Heading } from '@/components/ui/heading';

const RSADecryptionDescription = () => {
  return (
    <Heading>
      <Heading.Title>Desencriptación RSA</Heading.Title>
      <Heading.Description>
        Se utiliza la llave privada para descifrar el texto cifrado&nbsp;
        <InlineMath>c</InlineMath> y convertirlo devuelta al texto plano&nbsp;
        <InlineMath>m</InlineMath>. La operación que se lleva a cabo es&nbsp;
        <InlineMath>{`m = c^d\\;(\\textnormal{mód } n)`}</InlineMath>.
      </Heading.Description>
    </Heading>
  );
};

export { RSADecryptionDescription };
