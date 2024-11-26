import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  PushpinOutlined,
  IdcardOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import {
  Col,
  Layout,
  Menu,
  MenuProps,
  Row,
  Switch,
  Space,
  Typography,
} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useLoadingContext } from '../hooks/useLoadingContext';
import {
  NotificationPopup,
  NotificationPreferencesPopup,
} from '@notificationapi/react';
import { NotificationAPIProvider } from '@notificationapi/react';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

interface Props {
  children?: React.ReactNode;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Home</Link>, '1', <HomeOutlined />),
  getItem(
    <Link to="/push-notifications">Push Notifications</Link>,
    '2',
    <PushpinOutlined />,
  ),
  getItem(
    <Link to="/notification-card">Notification Card</Link>,
    '3',
    <IdcardOutlined />,
  ),
];

const locationsToShowSwitches = ['/push-notifications'];

const pageTitles: { [key: string]: string } = {
  '/': 'Home',
  '/push-notifications': 'Push Notifications',
  '/notification-card': 'Notification Card',
};

const PageLayout = ({ children }: Props): JSX.Element => {
  const { handleLoadingChange, handleSubmit } = useLoadingContext();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [preferencesPopupVisibility, setPreferencesPopupVisibility] =
    useState(false);

  useEffect(() => {
    document.title = pageTitles[location.pathname];
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ paddingTop: 64, backgroundColor: '#202532' }}
        theme="dark"
        trigger={
          collapsed ? (
            <ArrowRightOutlined style={{ color: '#FFFFFF' }} />
          ) : (
            <ArrowLeftOutlined style={{ color: '#FFFFFF' }} />
          )
        }
      >
        <Menu
          rootClassName="mainMenu"
          defaultSelectedKeys={['1']}
          items={items}
          mode="inline"
          theme="dark"
          style={{ backgroundColor: '#202532' }}
        />
      </Sider>
      <Layout style={{ backgroundColor: '#001529' }}>
        <Header style={{ padding: 0, backgroundColor: '#202532' }}>
          <Row
            justify="space-between"
            style={{
              padding: '0px 24px',
            }}
          >
            <Col>
              <Title style={{ color: '#FFFFFF' }} level={3}>
                {pageTitles[location.pathname]}
              </Title>
            </Col>

            {locationsToShowSwitches.includes(location.pathname) && (
              <Col>
                <Space size="large">
                  <Switch
                    checkedChildren="Loading"
                    unCheckedChildren="Not Loading"
                    defaultChecked={false}
                    onChange={handleLoadingChange}
                  />

                  <Switch
                    checkedChildren="Submitting"
                    unCheckedChildren="Not Submitting"
                    defaultChecked={false}
                    onChange={handleSubmit}
                  />
                </Space>
              </Col>
            )}
            <Col>
              <NotificationAPIProvider
                userId={import.meta.env.VITE_USER_ID}
                clientId={import.meta.env.VITE_CLIENT_ID}
                webPushOptInMessage="AUTOMATIC"
              >
                <NotificationPopup
                  buttonIconSize={24}
                  iconColor="#FFFFFF"
                  filter="UNARCHIVED"
                />
                <NotificationPreferencesPopup
                  open={preferencesPopupVisibility}
                  onClose={() => setPreferencesPopupVisibility(false)}
                />
              </NotificationAPIProvider>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            padding: 24,
            backgroundColor: '#f5f5f5',
            borderTopLeftRadius: 8,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
