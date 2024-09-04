import { useState, ReactNode } from 'react';
import LoadingContext from './LoadingContext';

export const LoadingProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLoadingChange = (checked: boolean) => {
    setIsLoading(checked);
  };

  const handleSubmit = (checked: boolean) => {
    setIsSubmitting(checked);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, isSubmitting, handleLoadingChange, handleSubmit }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
