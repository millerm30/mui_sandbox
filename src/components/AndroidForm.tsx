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
import { Android } from '@mui/icons-material';

const AndroidFormContainer = ({
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
            Android FCM
          </Typography>
        }
        avatar={<Android style={{ fontSize: 24, color: '#808080' }} />}
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
                fullWidth
                label="Service Account JSON"
                name="serviceAccountJson"
                required
                multiline
                rows={12}
                placeholder="{}"
                variant="outlined"
                error={isSubmitting && !isLoading}
                helperText={
                  isSubmitting && !isLoading
                    ? 'Service Account JSON is required'
                    : ''
                }
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
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

export default AndroidFormContainer;
