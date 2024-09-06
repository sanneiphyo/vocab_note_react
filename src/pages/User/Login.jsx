import React, { useEffect, useRef, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, login, selectIsAuthenticated } from '../../redux/services/AuthSlice';


const LOGIN_URL ='/login'

const Login = () => {

 

  const auth = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userRef = useRef();
  
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  // useEffect(() => {
  //   userRef.current.focus();
  // },[])

  useEffect(() => {
    setErrMsg('')
  },[user, pwd])

  const onFinish = async (values) => {

    console.log(values);
    setUser(values.username)
    setPwd(values.password)
    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({
          user_name : values.username, 
           password: values.password
          }),
           {
            headers : {'Content-Type': 'application/json'}
          }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.token;
      console.log(accessToken);

      // setAuth({user,pwd})
      dispatch(login(user))
      dispatch(addAuth({user, pwd}))
      console.log(auth.auth);
      


      
      localStorage.setItem('token', accessToken)

      

      setUser('')
      setPwd('')
      setSuccess(true)

     navigate('/card')
    } catch (error) {
      
      
         if (error) {
          setErrMsg(error.response?.data.message)
         }else{
          setErrMsg("Registration Failed")
         }

       
        
    }

   
  };

  if (success) {
    return (<Alert message="You are logged in" type="success" />)
  }

  return (
    <>

    {
      errMsg !== ''
      ? 
      <Alert message={errMsg} type="error" /> : ''
    }
    

    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
        margin: '0 auto',
        marginTop: '100px'
      }}
      onFinish={(e) => onFinish(e)}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input 
        ref={userRef}
        onChange={(e)=> setUser(e.target.value)} 
        value={user}
        required
        prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
     
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Sign In
        </Button>
        or <Link to={'/register'}>Register Now</Link>
      </Form.Item>
    </Form>

    </>
  );
};
export default Login;