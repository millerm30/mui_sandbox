import AppleForm from '../components/AppleForm';
import AndroidForm from '../components/AndroidForm';
import { useLoadingContext } from '../hooks/useLoadingContext';
import { Grid2, Switch, FormControlLabel } from '@mui/material';

const PushContainer = () => {
  const { handleLoadingChange, handleSubmit, isLoading, isSubmitting } =
    useLoadingContext();

  return (
    <Grid2 container spacing={3} p={3}>
      <Grid2
        container
        size={12}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isLoading}
              onChange={(event) => handleLoadingChange(event)}
              inputProps={{ 'aria-label': 'loading-switch' }}
            />
          }
          label="Show Loading"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isSubmitting}
              onChange={(event) => handleSubmit(event)}
              inputProps={{ 'aria-label': 'submitting-switch' }}
            />
          }
          label="Show Submitting"
        />
      </Grid2>
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
