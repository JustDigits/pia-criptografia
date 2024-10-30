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

import RSAImage from '@/assets/images/rsa.jpg';

export default function Home() {
  return (
    <div className="w-full grid justify-items-center">
      <main className="container grid items-center justify-items-center my-8 space-y-9">
        <Heading className="sm:text-center">
          <Heading.Title>Programas de Encriptación</Heading.Title>
          <Heading.Description>
            Proyecto Final de Criptografía
          </Heading.Description>
        </Heading>
        <Link href="/cifrado-rsa">
          <Card>
            <CardContent className="p-0">
              <Image
                src={RSAImage}
                alt="Algoritmo RSA"
                width={500}
                height={250}
                className="rounded-t-xl"
              />
            </CardContent>
            <CardHeader className="text-center sm:text-left">
              <CardTitle>Algoritmo Rivest-Shamir-Adleman</CardTitle>
              <CardDescription>Método de cifrado asimétrico.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </main>
    </div>
  );
}
