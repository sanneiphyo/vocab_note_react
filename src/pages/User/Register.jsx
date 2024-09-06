import React, { useState } from 'react';
import { Alert, Button, Checkbox, Form, Input} from 'antd';
import axios from '../../api/axios';
import { useRef } from 'react';
import img from '../../assets/image 2.png'
import { Link, useNavigate } from 'react-router-dom';

const REGISTER_URL = '/register';

    

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */


const Register = () => { 

    const userRef = useRef();

    const navigate = useNavigate()
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    // const handleSubmit = async (e) =>{
    //     e.preventDefault()

    //     try {
    //         const response = await axios.post(REGISTER_URL, JSON.stringify({
    //            username : user, 
    //            email: email,
    //             password: pwd
    //         }), {
    //             headers: {'Content-Type': 'application/json'},
    //             withCredentials: true
    //         })

    //         console.log(response.data);
    //         console.log(response.accessToken);
    //         console.log(JSON.stringify(response));
            
           
            
            
    //     } catch (error) {
    //         if (!error?.response) {
    //             console.log('No server Response');
                
    //         }else if(error.response?.status === 409){
    //             console.log('Username Taken');
                
    //         }else {
    //             console.log('Registration Failed');
                
    //         }
    //     }

    // }


    const onFinish = async (values) => {
      
  
      console.log(values);
      
      try {
          const response = await axios.post(REGISTER_URL, JSON.stringify({
             user_name : values.user.name, 
             email: values.user.email,
              password: values.password
          }), {
              headers: {'Content-Type': 'application/json'},      
             
          })
  
        
          console.log(JSON.stringify(response));

          setSuccess(true)
        
          // navigate('/login')
                 
          
      } catch (error) {
        setSuccess(false)
         
        if (error) {
         
          setErrMsg(error.response?.data.message)
         }else{
          setErrMsg("Registration Failed")
         }
      }
  };

  if(user!==null)
    
    return (
      <div className="flex h-screen overflow-hidden">
        <div className="  w-[47%]">
            <img src={img} alt="" className='w-full h-full ' />
        </div>
        <div className=' w-[50%] flex justify-center items-center'>

        {
          success ? 
          <div className="flex items-start justify-center">
            <div className="p-10 border border-gray-200 rounded-lg shadow-md">
            <h2 className='text-green-500 text-[24px] font-semibold'>Your Account has been registered successfully!</h2>
            <p className=' text-[20px] mt-4'>Please Sign In Again 

              <Link to="/login" className='font-bold text-blue-500'>  Sign In</Link>
            </p>
          </div>
          </div>
          
          : 

            <div className=' w-[498px] '>
            <h2 className=' text-[#1777CE] text-[40px] font-bold leading-[68px] '>Sign Up</h2>

            {
              errMsg !== ''
              ? 
              <Alert className='mt-5' message={errMsg} type="error" /> : ''
            }
    
            <Form
            //  {...formItemLayout}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
              margin: '40px auto'
            }}
            validateMessages={validateMessages}
            >
            <label htmlFor='user'  className=' text-[16px] '>Full Name (required)</label>

            <Form.Item
              name={['user', 'name']}
              className='w-full'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
              ref={userRef}
              placeholder='Enter your name'
              onChange={(e)=> setUser(e.target.value)} 
              value={user}
              className='w-full h-[55px] text-[14px] mt-[8px]'
              />
            </Form.Item>
            <label htmlFor="email" className=' text-[16px] '>Email (required)</label>
            <Form.Item
              name={['user', 'email']}

              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              

              <Input 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                value={email}
                className='w-full h-[55px] text-[14px] mt-[8px]'
              />
            </Form.Item>

            <label htmlFor="password" className=' text-[16px] '>Password (required)</label>
            <Form.Item
                name="password"
                
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
              

                <Input.Password 
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter your password"
                    value={pwd}
                    className='w-full h-[55px] text-[14px] mt-[8px]'
                />
              </Form.Item>


              <label htmlFor="confirm" className=' text-[16px] '>Confirm Password</label>
              <Form.Item
                name="confirm"
              
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
              

                <Input.Password
                placeholder='Confirm your password'
                className='w-full h-[55px] text-[14px] mt-[8px]' />
              </Form.Item>

              
              <Form.Item >
                <Button type="primary" htmlType="submit" 
                className='w-full h-[55px] text-[20px] mt-[8px]'
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            </div>
                      
        }
          
         
        </div>
      </div>
 
)};
export default Register;