import React from 'react';
import { Card, Dropdown, MenuProps, Popover, Typography } from 'antd';
import { EditFilled } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

interface NotificationCardProps {
  title: string;
  description: string;
}

const NotificationCard: React.FC<NotificationCardProps> = (props) => {
  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
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
      title={`${props.title}`}
      actions={[
        <span onClick={() => console.log('Edit clicked')}>
          <>
            <EditFilled /> Edit
          </>
        </span>,
      ]}
      extra={
        <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
          Actions
        </Dropdown.Button>
      }
    >
      <Paragraph>{props.description}</Paragraph>
    </Card>
  );
};

export default NotificationCard;
