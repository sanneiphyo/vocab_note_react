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
import Logout from '../pages/User/Logout';

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const username = localStorage.getItem('user')

  

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
              label: <Link to="/vocab/note">Note</Link>,
            },
            {
              key: '2',
              icon: <LayoutOutlined />,
              label: <Link to="/vocab/revise">Revised Words</Link>,
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
         
          <div className="mr-[3rem]">
          <Button className="mr-[8px] bg-gray-300 h-10 rounded-full mt-3">
            <UserOutlined />
            
          </Button>
          {username}

          <Logout />
          </div>
          
         
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
