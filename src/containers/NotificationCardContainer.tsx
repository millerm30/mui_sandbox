import { useEffect, useState } from 'react';
import { Col, Grid, Row, Spin } from 'antd';
import NotificationCard from '~components/NotificationCard';
import { Channels, NotificationData } from '../types';

const { useBreakpoint } = Grid;

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
  const screens = useBreakpoint();
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
      <Spin
        size="large"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      />
    );
  }

  return (
    <Row gutter={[24, 24]}>
      {data?.map((notification) => (
        <Col key={notification.id} span={screens.xl ? 13 : 24}>
          <NotificationCard
            title={notification.title}
            notificationId={notification.notificationId}
            enabled={notification.enabled}
            channels={notification.channels}
          />
        </Col>
      ))}
    </Row>
  );
};

export default NotificationCardContainer;
