import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { AppleFilled } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const AppleFormContainer = ({
  isLoading,
  isSubmitting,
}: {
  isLoading: boolean;
  isSubmitting: boolean;
}) => {
  return (
    <Card
      title={
        <Title level={3} style={{ margin: 0 }}>
          APN
        </Title>
      }
      extra={<AppleFilled style={{ fontSize: 24, color: '#808080' }} />}
      loading={isLoading}
    >
      <Form layout="vertical" requiredMark={false}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Key ID:"
              name={['keyId']}
              rules={[
                {
                  required: true,
                  message: 'Key ID is required',
                },
              ]}
            >
              <Input allowClear placeholder="Enter your KeyId" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Key:"
              name={['key']}
              rules={[
                {
                  required: true,
                  message: 'Key is required',
                },
              ]}
            >
              <TextArea
                allowClear
                placeholder="---Enter Your Key---"
                rows={5}
                style={{ resize: 'none' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Team:"
              name={['team']}
              rules={[{ required: true, message: 'Team is required' }]}
            >
              <Input allowClear placeholder="Enter your TeamId" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Topic (App Bundle Id):"
              name={['topic']}
              rules={[{ required: true, message: 'Topic is required' }]}
            >
              <Input allowClear placeholder="App Bundle Id" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'end'}>
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
        </Row>
      </Form>
    </Card>
  );
};

export default AppleFormContainer;
