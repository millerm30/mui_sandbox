import { Grid2, Typography } from '@mui/material';

const HomeContainer = () => {
  return (
    <Grid2 container columns={12} sx={{ height: '100%' }}>
      <Grid2
        columns={12}
        sx={{ borderTopLeftRadius: 8 }}
        bgcolor="#f5f5f5"
        p={3}
        width={1}
      >
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
