import AppleForm from '../components/AppleForm';
import AndroidForm from '../components/AndroidForm';
import { useLoadingContext } from '../hooks/useLoadingContext';
import { Grid2, Switch, FormControlLabel } from '@mui/material';

const PushContainer = () => {
  const { handleLoadingChange, handleSubmit, isLoading, isSubmitting } =
    useLoadingContext();

  return (
    <Grid2 container columns={12} sx={{ height: '100%' }}>
      <Grid2
        columns={12}
        sx={{ borderTopLeftRadius: 8 }}
        bgcolor="#f5f5f5"
        p={3}
        width={1}
      >
        <Grid2>
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

        <Grid2 container columns={12} spacing={2}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <AppleForm isLoading={isLoading} isSubmitting={isSubmitting} />
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <AndroidForm isLoading={isLoading} isSubmitting={isSubmitting} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default PushContainer;
