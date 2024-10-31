import Link from 'next/link';
import Image from 'next/image';

import { Heading } from '@/components/ui/heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import RSAImage from '@/assets/images/rsa-algorithm.jpg';
import TranspositionCipherImage from '@/assets/images/transposition-cipher.jpeg';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center space-y-9">
      <Heading className="sm:text-center">
        <Heading.Title>Programas de Encriptación</Heading.Title>
        <Heading.Description>
          Proyecto Final de Criptografía
        </Heading.Description>
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/cifrado-rsa">
          <Card>
            <CardContent className="p-0">
              <img
                src={RSAImage.src}
                alt="Algoritmo RSA"
                className="rounded-t-xl w-full md:h-52 xl:h-80"
                width={500}
              />
            </CardContent>
            <CardHeader className="text-center sm:text-left">
              <CardTitle>Algoritmo Rivest-Shamir-Adleman</CardTitle>
              <CardDescription>
                Método de cifrado asimétrico basado en llaves.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/cifrado-transposicion">
          <Card>
            <CardContent className="p-0">
              <img
                src={TranspositionCipherImage.src}
                alt="Cifrado por Transposición"
                className="rounded-t-xl w-full md:h-52 xl:h-80"
                width={500}
              />
            </CardContent>
            <CardHeader className="text-center sm:text-left">
              <CardTitle>Cifrado por Transposición</CardTitle>
              <CardDescription>
                Método de cifrado por permutación de carácteres.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
