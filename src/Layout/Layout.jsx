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
import { FormOutlined } from '@ant-design/icons';
import { FolderOutlined } from '@ant-design/icons';
import { LogoutOutlined } from '@ant-design/icons';
import Logo from "../assets/Images/Logo.png";
const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const username = localStorage.getItem('user')

  

  return (
    <Layout className="min-h-screen ">
      <Sider className='relative w-[100%] ' trigger={null} collapsible collapsed={collapsed}  style ={{ background: colorBgContainer}}>
        <div className="demo-logo-vertical" />  
        <div className='mx-[3rem] mt-5'>
          <img src = {Logo} className='w-[70px]  '/>
        </div>
        <Menu
          mode="inline"
          className="mt-[2rem] text-[18px]"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FormOutlined />,

              label: <Link to="/vocab/new-word/flashcard" className=' text-[15px]'>New Word</Link>,

            },
            {
              key: '2',
              icon: <FolderOutlined />,
              label: <Link to="/vocab/revise" className=' text-[15px]'>Revised Words</Link>,
            },
            
          
          ]}
        />


      <Menu
          theme="light"
          mode="inline"
          className=" w-full top-[150px] hover:bg-none mt-[400px]"  // Push to the bottom
        >
          <Menu.Item
            key="logout"
            className=''
            icon={<LogoutOutlined className=' hover:bg-none' />}
           
          >
           
            <Logout />
          </Menu.Item>
        </Menu>

        
        {/* <div className="fixed bottom-0 mx-5">
          <LogoutOutlined />
         <Logout />
        </div> */}
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

          {/* <Logout /> */}
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
