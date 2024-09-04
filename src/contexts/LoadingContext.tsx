// LoadingContext.ts
import { createContext } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  isSubmitting: boolean;
  handleLoadingChange: (checked: boolean) => void;
  handleSubmit: (checked: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export default LoadingContext;
