import AppleForm from '../components/AppleForm';
import AndroidForm from '../components/AndroidForm';
import { useLoadingContext } from '../hooks/useLoadingContext';
import { Grid2 } from '@mui/material';

const PushContainer = () => {
  const { isLoading, isSubmitting } = useLoadingContext();

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ md: 6, xs: 12 }}>
        <AppleForm isLoading={isLoading} isSubmitting={isSubmitting} />
      </Grid2>
      <Grid2 size={{ md: 6, xs: 12 }}>
        <AndroidForm isLoading={isLoading} isSubmitting={isSubmitting} />
      </Grid2>
    </Grid2>
  );
};

export default PushContainer;
