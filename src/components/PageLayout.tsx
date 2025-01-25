import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  PushPinOutlined,
  BadgeOutlined,
  WestOutlined,
  EastOutlined,
} from '@mui/icons-material';
import { Layout, Menu, MenuProps } from 'antd';
import { Typography, Switch, FormControlLabel, Grid2 } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useLoadingContext } from '../hooks/useLoadingContext';
import {
  NotificationPopup,
  NotificationPreferencesPopup,
} from '@notificationapi/react';

const { Header, Content, Sider } = Layout;

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
    <PushPinOutlined />,
  ),
  getItem(
    <Link to="/notification-card">Notification Card</Link>,
    '3',
    <BadgeOutlined />,
  ),
];

const locationsToShowSwitches = ['/push-notifications'];

const pageTitles: { [key: string]: string } = {
  '/': 'Home',
  '/push-notifications': 'Push Notifications',
  '/notification-card': 'Notification Card',
};

const PageLayout = ({ children }: Props): JSX.Element => {
  const { handleLoadingChange, handleSubmit, isLoading, isSubmitting } =
    useLoadingContext();
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
            <EastOutlined style={{ color: '#FFFFFF' }} />
          ) : (
            <WestOutlined style={{ color: '#FFFFFF' }} />
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
          <Grid2 container alignItems="flex-end" justifyContent="space-between">
            <Grid2 pl={3}>
              <Typography color="#FFFFFF" variant="h5" marginBottom={1}>
                {pageTitles[location.pathname]}
              </Typography>
            </Grid2>

            {locationsToShowSwitches.includes(location.pathname) && (
              <Grid2>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isLoading}
                      onChange={(event) => handleLoadingChange(event)}
                      inputProps={{ 'aria-label': 'loading-switch' }}
                    />
                  }
                  label="Show Loading"
                  sx={{ color: '#FFFFFF' }}
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={isSubmitting}
                      onChange={(event) => handleSubmit(event)}
                      inputProps={{ 'aria-label': 'submitting-switch' }}
                    />
                  }
                  label="Show Submitting"
                  sx={{ color: '#FFFFFF' }}
                />
              </Grid2>
            )}
            <Grid2>
              <NotificationPopup buttonIconSize={24} iconColor="#FFFFFF" />
              <NotificationPreferencesPopup
                open={preferencesPopupVisibility}
                onClose={() => setPreferencesPopupVisibility(false)}
              />
            </Grid2>
          </Grid2>
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
