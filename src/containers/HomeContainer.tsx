import { Col, Row, Typography } from 'antd';

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
      </Col>
    </Row>
  );
};

export default HomeContainer;
