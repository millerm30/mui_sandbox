import AppleForm from '../components/AppleForm';
import AndroidForm from '../components/AndroidForm';
import { Row, Col } from 'antd';
import { useLoadingContext } from '../hooks/useLoadingContext';

const PushContainer = () => {
  const { isLoading, isSubmitting } = useLoadingContext();

  return (
    <Row style={{ marginTop: 32 }} gutter={[16, 16]}>
      <Col span={12}>
        <AppleForm isLoading={isLoading} isSubmitting={isSubmitting} />
      </Col>
      <Col span={12}>
        <AndroidForm isLoading={isLoading} isSubmitting={isSubmitting} />
      </Col>
    </Row>
  );
};

export default PushContainer;
