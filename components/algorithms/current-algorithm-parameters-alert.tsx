import { InfoCircledIcon } from '@radix-ui/react-icons';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

type CurrentAlgorithmParametersAlertProps = {
  children: React.ReactNode;
};

const CurrentAlgorithmParametersAlert = ({
  children,
}: CurrentAlgorithmParametersAlertProps) => {
  return (
    <Alert variant="informative">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>¡Atención!</AlertTitle>
      <AlertDescription>
        <p>
          Actualmente se están utilizando los siguientesd parámetros para el
          algoritmo:
        </p>
        {children}
      </AlertDescription>
    </Alert>
  );
};

export { CurrentAlgorithmParametersAlert };
