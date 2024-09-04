import AppleForm from '../components/AppleForm';
import AndroidForm from '../components/AndroidForm';
import { Row, Col, Grid } from 'antd';
import { useLoadingContext } from '../hooks/useLoadingContext';

const { useBreakpoint } = Grid;

const PushContainer = () => {
  const { isLoading, isSubmitting } = useLoadingContext();
  const screens = useBreakpoint();

  return (
    <Row
      gutter={[24, 24]}
      style={{ flexDirection: screens.lg ? 'row' : 'column' }}
    >
      <Col span={screens.lg ? 12 : 24}>
        <AppleForm isLoading={isLoading} isSubmitting={isSubmitting} />
      </Col>
      <Col span={screens.lg ? 12 : 24}>
        <AndroidForm isLoading={isLoading} isSubmitting={isSubmitting} />
      </Col>
    </Row>
  );
};

export default PushContainer;
