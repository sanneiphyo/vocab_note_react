import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FolderOpenOutlined,
  LayoutOutlined 
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-[39rem]">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />  
        <Menu
          theme="dark"
          mode="inline"
          className="mt-[6rem]"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FolderOpenOutlined />,
              label: <Link to="/note">Note</Link>,
            },
            {
              key: '2',
              icon: <LayoutOutlined />,
              label: <Link to="/revise">Revised Words</Link>,
            },
          
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex justify-between w-full"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Link to = "/user">
          <Button className="mr-[3rem] bg-gray-300 h-10 rounded-full mt-3">
            <UserOutlined />
          </Button>
          </Link>
         
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
