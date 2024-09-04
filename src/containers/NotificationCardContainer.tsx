import { Row, Col, Grid } from 'antd';
import NotificationCard from '~components/NotificationCard';

const { useBreakpoint } = Grid;

interface NotificationData {
  id: number;
  title: string;
  description: string;
}

const NotificationsData: NotificationData[] = [
  {
    id: 1,
    title: 'Title One Notification Card',
    description:
      'This is the content of the notification, it can be long or short, depending on the content.',
  },
  {
    id: 2,
    title: 'Title Two This Is A Notification Card',
    description: 'Notification Description Two, this is a short one.',
  },
  {
    id: 3,
    title: 'Title Three Notification Card Test',
    description:
      'Notification Description Three, this is a long one. It can be long or short. It depends on the content. This is a long one. It can be long or short. It depends on the content.',
  },
];

const NotificationCardContainer = () => {
  const screens = useBreakpoint();

  return (
    <Row gutter={[24, 24]}>
      {NotificationsData.map((notification) => (
        <Col key={notification.id} span={screens.xl ? 12 : 24}>
          <NotificationCard
            title={notification.title}
            description={notification.description}
          />
        </Col>
      ))}
    </Row>
  );
};

export default NotificationCardContainer;
