import { InfoCircledIcon } from '@radix-ui/react-icons';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

type AlgorithmParametersAlertProps = {
  children: React.ReactNode;
};

const CurrentAlgorithmParametersAlert = ({
  children,
}: AlgorithmParametersAlertProps) => {
  return (
    <Alert variant="informative">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>¡Atención!</AlertTitle>
      <AlertDescription>
        <p>
          Actualmente se están utilizando los siguientes parámetros para el
          algoritmo:
        </p>
        {children}
      </AlertDescription>
    </Alert>
  );
};

const SingleAlgorithmParametersAlert = ({
  children,
}: AlgorithmParametersAlertProps) => {
  return (
    <Alert variant="informative">
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export { CurrentAlgorithmParametersAlert, SingleAlgorithmParametersAlert };
