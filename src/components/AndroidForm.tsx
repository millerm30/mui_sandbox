import { Card, Button, Row, Col, Typography, Form, Input } from 'antd';
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
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '100%' }}
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
                name="serviceAccountJson"
                allowClear
                rows={12}
                style={{ resize: ' none' }}
                placeholder="{}"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Form.Item>
              <Button
                htmlType="submit"
                loading={isSubmitting}
                size="large"
                type="primary"
                style={{ width: 130 }}
                iconPosition="end"
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
