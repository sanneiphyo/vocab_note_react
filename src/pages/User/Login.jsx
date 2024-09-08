import React, { useEffect, useRef, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, login, selectIsAuthenticated } from '../../redux/services/AuthSlice';
import img from '../../assets/image 2.png'


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
      localStorage.setItem('user',user)

      

      setUser('')
      setPwd('')
      setSuccess(true)

     navigate('/vocab/new-word/flashcard')
    } catch (error) {
      console.log(error.response);
      
      
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

  console.log(errMsg);
  

  return (
    <>


  
    <div className="flex h-screen overflow-hidden">
    <div className="  w-[47%]">
            <img src={img} alt="" className='w-full h-full ' />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[498px]">
            <h2 className=' text-[#1777CE] text-[40px] font-bold leading-[68px] '>Sign In</h2>
                    {
              errMsg !== ''
              ? 
              <Alert className='mt-5' message={errMsg} type="error" /> : ''
            }
    
            <Form
              name="login"
              initialValues={{
                remember: true,
              }}
              style={{
                
                margin: '0 auto',
                marginTop: '40px'
              }}
              onFinish={(e) => onFinish(e)}
            >
                <label htmlFor="username" className=' text-[16px] '>User Name (required)</label>
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
                prefix={<UserOutlined />} placeholder="Username" 
                className='w-full h-[55px] text-[14px] mt-[8px]'/>
              </Form.Item>

              <label htmlFor="password" className=' text-[16px] '>Password (required)</label>
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
                prefix={<LockOutlined />} type="password" placeholder="Password"
                className='w-full h-[55px] text-[14px] mt-[8px]' />
              </Form.Item>
            
              <Form.Item>
                <Button block type="primary" htmlType="submit"
                 className='w-full h-[55px] text-[20px] mt-[8px]'
                >
                  Sign In
                </Button>
              </Form.Item>

              <div className="text-right ">
                 <Link className='text-right text-[16px] ' to={'/register'}>Don't have an account? <span className='font-semibold text-blue-500'>Sign Up</span></Link>

              </div>
            </Form>
          </div>
        
        </div>
    </div>
   

    </>
  );
};
export default Login;