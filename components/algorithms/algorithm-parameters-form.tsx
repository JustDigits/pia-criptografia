import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type AlgorithmParametersFormProps = {
  children: React.ReactNode;
};

const AlgorithmParametersForm = ({
  children,
}: AlgorithmParametersFormProps) => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Configuración del algoritmo</CardTitle>
        <CardDescription>
          Establezca los parámetros iniciales que usará el algoritmo
        </CardDescription>
        <CardContent>{children}</CardContent>
      </CardHeader>
    </Card>
  );
};

export { AlgorithmParametersForm };
