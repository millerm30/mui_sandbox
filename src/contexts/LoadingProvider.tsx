import { useState, ReactNode } from 'react';
import LoadingContext from './LoadingContext';

export const LoadingProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLoadingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(event.target.checked);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSubmitting(event.target.checked);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, isSubmitting, handleLoadingChange, handleSubmit }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
