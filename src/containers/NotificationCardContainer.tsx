import { useEffect, useState } from 'react';
import NotificationCard from '~components/NotificationCard';
import { Channels, NotificationData } from '../types';
import { Grid2, CircularProgress, Box } from '@mui/material';

const notificationsData: NotificationData[] = [
  {
    id: 1,
    notificationId: 'title_one_notification_card',
    title: 'Title One Notification Card',
    enabled: true,
    channels: [Channels.EMAIL, Channels.SMS],
  },
  {
    id: 2,
    notificationId: 'title_two_this_is_a_notification_card',
    title: 'Title Two This Is A Notification Card',
    enabled: false,
    channels: [Channels.PUSH, Channels.INAPP_WEB],
  },
  {
    id: 3,
    notificationId: 'title_three_notification_card_test',
    title: 'Title Three Notification Card Test',
    enabled: true,
    channels: [
      Channels.EMAIL,
      Channels.SMS,
      Channels.PUSH,
      Channels.INAPP_WEB,
      Channels.WEB_PUSH,
      Channels.CALL,
    ],
  },
];

const NotificationCardContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<NotificationData[] | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(notificationsData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Grid2 container spacing={3} p={3} sx={{ backgroundColor: '#f5f5f5' }}>
      {data?.map((notification) => (
        <Grid2 key={notification.id} size={{ md: 12, lg: 10, xl: 8 }}>
          <NotificationCard
            title={notification.title}
            notificationId={notification.notificationId}
            enabled={notification.enabled}
            channels={notification.channels}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default NotificationCardContainer;
