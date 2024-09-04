import { Button, Col, Card, Form, Input, Row, Typography } from 'antd';
import { AndroidFilled } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const AndroidFormContainer = ({
  isLoading,
  isSubmitting,
}: {
  isLoading: boolean;
  isSubmitting: boolean;
}) => {
  return (
    <Card
      style={{ height: '100%' }}
      title={
        <Title level={3} style={{ margin: 0 }}>
          Android FCM
        </Title>
      }
      extra={<AndroidFilled style={{ fontSize: 24, color: '#808080' }} />}
      loading={isLoading}
    >
      <Form layout="vertical" requiredMark={false}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Service Account JSON:"
              name={['serviceAccountJson']}
              rules={[
                {
                  required: true,
                  message: 'Service Account JSON is required',
                },
              ]}
            >
              <TextArea
                allowClear
                name="serviceAccountJson"
                placeholder="{}"
                rows={12}
                style={{ resize: 'none' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Form.Item>
              <Button
                htmlType="submit"
                iconPosition="end"
                loading={isSubmitting}
                size="middle"
                style={{ width: 130 }}
                type="primary"
              >
                {isSubmitting ? 'Submitting' : 'Submit'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default AndroidFormContainer;
