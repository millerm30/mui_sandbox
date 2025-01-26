import { Grid2, Typography } from '@mui/material';

const HomeContainer = () => {
  return (
    <Grid2 container p={3}>
      <Grid2 columns={12}>
        <Typography style={{ marginTop: 0 }} variant="h4">
          Welcome
        </Typography>
        <Typography variant="body1">
          Material Design local sandbox for development and testing features and
          components.
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default HomeContainer;
