import React, { useState } from 'react';
import { HomeOutlined, PushpinOutlined } from '@ant-design/icons';
import { Layout, Menu, Switch, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { useLoadingContext } from '../hooks/useLoadingContext';

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
    <PushpinOutlined />,
  ),
];

const PageLayout = ({ children }: Props): JSX.Element => {
  const { handleLoadingChange, handleSubmit } = useLoadingContext();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ paddingTop: 64 }}
        theme="dark"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
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
            style={{ marginLeft: 16 }}
          />
        </Header>

        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
