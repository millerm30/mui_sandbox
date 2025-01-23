import { Col, Row, Typography, Space } from 'antd';
import {
  NotificationFeed,
  NotificationPreferencesInline,
} from '@notificationapi/react';

const { Title, Paragraph } = Typography;

const HomeContainer = () => {
  return (
    <Row>
      <Col span={24}>
        <Title style={{ marginTop: 0 }} level={2}>
          Welcome
        </Title>
        <Paragraph>
          Ant Design local sandbox for development and testing features and
          components.
        </Paragraph>
        <Space direction="vertical" style={{ width: '100%', marginBottom: 20 }}>
          <NotificationPreferencesInline />
        </Space>
        <NotificationFeed />
      </Col>
    </Row>
  );
};

export default HomeContainer;
