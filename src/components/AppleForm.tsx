import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Button,
  Grid2,
  Typography,
  Skeleton,
} from '@mui/material';
import { Apple } from '@mui/icons-material';

const AppleFormContainer = ({
  isLoading,
  isSubmitting,
}: {
  isLoading: boolean;
  isSubmitting: boolean;
}) => {
  return (
    <Card sx={{ height: '100%', borderRadius: 2 }} variant="outlined">
      <CardHeader
        title={
          <Typography variant="h5" component="div" lineHeight={1.0}>
            APN
          </Typography>
        }
        avatar={<Apple style={{ fontSize: 24, color: '#808080' }} />}
      />
      <Divider />
      <CardContent>
        {isLoading ? (
          <Grid2 container flexDirection={'column'} spacing={2}>
            <Skeleton variant="rounded" animation="wave" />
            <Skeleton variant="rounded" animation="wave" />
            <Skeleton variant="rounded" animation="wave" />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ maxWidth: '75%' }}
            />
          </Grid2>
        ) : (
          <Grid2 container flexDirection={'column'} spacing={2}>
            <Grid2>
              <TextField
                placeholder="Enter your KeyId"
                label="key ID:"
                fullWidth
                sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                size="small"
              />
            </Grid2>
            <Grid2>
              <TextField
                placeholder="---Enter Your Key---"
                label="Key:"
                rows={5}
                sx={{
                  '& .MuiInputBase-root': { borderRadius: 2 },
                  resize: 'none',
                }}
                multiline
                fullWidth
              />
            </Grid2>
            <Grid2>
              <TextField
                placeholder="Enter your TeamId"
                label="Team:"
                fullWidth
                sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                size="small"
              />
            </Grid2>
            <Grid2>
              <TextField
                placeholder="App Bundle Id"
                label="Top (App Bundle Id):"
                fullWidth
                sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                size="small"
              />
            </Grid2>
            <Grid2 container justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                disabled={isSubmitting}
                sx={{ borderRadius: 2, width: 120, textTransform: 'none' }}
                loading={isSubmitting}
                loadingPosition="end"
              >
                {isSubmitting ? 'Submitting' : 'Submit'}
              </Button>
            </Grid2>
          </Grid2>
        )}
      </CardContent>
    </Card>
  );
};

export default AppleFormContainer;
