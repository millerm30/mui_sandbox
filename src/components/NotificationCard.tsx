import React from 'react';
import {
  Button,
  Card,
  Dropdown,
  MenuProps,
  Popover,
  Row,
  Col,
  Typography,
  Tag,
} from 'antd';
import {
  EditFilled,
  BellOutlined,
  ChromeOutlined,
  MailOutlined,
  MessageOutlined,
  MobileOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import { Channels, NotificationCardProps } from '../types';

const { Text, Paragraph } = Typography;

const getChannelIcon = (channel: Channels): React.ReactElement => {
  switch (channel) {
    case Channels.EMAIL:
      return <MailOutlined style={{ color: blue.primary }} />;
    case Channels.SMS:
      return <MessageOutlined style={{ color: blue.primary }} />;
    case Channels.PUSH:
      return <MobileOutlined style={{ color: blue.primary }} />;
    case Channels.CALL:
      return <PhoneOutlined style={{ color: blue.primary }} />;
    case Channels.INAPP_WEB:
      return <BellOutlined style={{ color: blue.primary }} />;
    case Channels.WEB_PUSH:
      return <ChromeOutlined style={{ color: blue.primary }} />;
    default:
      return <MailOutlined style={{ color: blue.primary }} />;
  }
};

const NotificationCard: React.FC<NotificationCardProps> = (props) => {
  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  const channelShortNames: Record<Channels, string> = {
    EMAIL: 'Email',
    INAPP_WEB: 'In-App',
    SMS: 'SMS',
    CALL: 'Call',
    PUSH: 'Push',
    WEB_PUSH: 'Web Push',
  };

  const getChannelShortName = (channel: string | undefined): string => {
    return channelShortNames[channel as Channels] || channel || '';
  };

  const getChannelTagText = (channel: Channels) => {
    const text = getChannelShortName(channel as Channels);
    return text;
  };

  const items = [
    {
      label: (
        <Popover
          arrow={false}
          content={
            <div style={{ maxWidth: '300px' }}>
              <Paragraph style={{ marginBottom: 0 }}>
                Duplicating a notification will create a new notification with
                the same content and settings. The new notification will have a
                different notification
              </Paragraph>
            </div>
          }
          placement="right"
          overlayStyle={{
            paddingLeft: '24px',
          }}
          overlayInnerStyle={{ padding: '16px' }}
          mouseEnterDelay={0.1}
        >
          <div>
            <Text style={{ padding: 24 }}>Duplicate</Text>
          </div>
        </Popover>
      ),
      key: 'duplicate',
    },
    {
      label: (
        <Popover
          arrow={false}
          content={
            <div style={{ maxWidth: '300px' }}>
              <Paragraph style={{ marginBottom: 0 }}>
                Disabling a notification causes requests with this
                notificationId to be ignored without any adverse side-effects.
                Your code will continue to work as before, but the API/SDK will
                return soft warnings.
              </Paragraph>
            </div>
          }
          placement="right"
          overlayStyle={{
            paddingLeft: '24px',
          }}
          overlayInnerStyle={{ padding: '16px' }}
          mouseEnterDelay={0.1}
        >
          <div>
            <Text style={{ padding: 24 }} type="warning">
              Disable
            </Text>
          </div>
        </Popover>
      ),
      key: 'disable',
    },
    {
      label: (
        <Popover
          arrow={false}
          content={
            <div style={{ maxWidth: '300px' }}>
              <Paragraph style={{ marginBottom: 0 }}>
                Deleting a notification cannot be undone. It will cause all
                requests with this notificationId to throw an error. Before
                removing a notification, disable it and review the logs.
              </Paragraph>
            </div>
          }
          placement="right"
          overlayStyle={{
            paddingLeft: '24px',
          }}
          overlayInnerStyle={{ padding: '16px' }}
          mouseEnterDelay={0.1}
        >
          <div>
            <Text style={{ padding: 24 }} type="danger">
              Delete
            </Text>
          </div>
        </Popover>
      ),
      key: 'delete',
    },
  ];

  return (
    <Card
      title={
        <>
          <Text>{props.title}</Text>
          {!props.enabled && (
            <Tag style={{ marginLeft: '8px' }} color="orange">
              Disabled
            </Tag>
          )}
        </>
      }
      actions={[
        <Row gutter={[24, 24]} justify="end" style={{ marginRight: 12 }}>
          <Col>
            <Button
              type="primary"
              onClick={() => console.log('Edit clicked')}
              icon={<EditFilled />}
            >
              Edit
            </Button>
          </Col>
          <Col>
            <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
              Actions
            </Dropdown.Button>
          </Col>
        </Row>,
      ]}
    >
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Row gutter={[16, 8]}>
            <Col>
              {props.channels.map((c) => (
                <Tag
                  key={c}
                  icon={getChannelIcon(c as Channels)}
                  style={{ marginBottom: 8 }}
                >
                  {getChannelTagText(c as Channels)}
                </Tag>
              ))}
            </Col>
            <Col span={24}>
              <Text type="secondary">ID:</Text>{' '}
              <Text>{props.notificationId}</Text>
            </Col>
            <Col span={24}>
              <Text type="secondary">Options:</Text>{' '}
              {props.deduplication ? 'Deduplication' : 'none'}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default NotificationCard;
