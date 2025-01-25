import { createContext, ChangeEvent } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  isSubmitting: boolean;
  handleLoadingChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export default LoadingContext;
