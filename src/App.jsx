import React from 'react';
import Router from "./router/router"
import { ConfigProvider } from "antd";


const App = () => {
  return (
    <ConfigProvider>
     
        <Router/>
    
      
    </ConfigProvider>
  )
}

export default App