import React, { useState } from 'react';
import { Button, Checkbox, Form, Input} from 'antd';
import axios from '../../api/axios';
import { useRef } from 'react';

const REGISTER_URL = '/users';

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

const onFinish = async (values) => {

    console.log(values);
    
    try {
        const response = await axios.post(REGISTER_URL, JSON.stringify({
           user_name : values.user.name, 
           email: values.user.name,
            password: values.password
        }), {
            headers: {'Content-Type': 'application/json'},      
           
        })

        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
               
        
    } catch (error) {
        if (!error?.response) {
            console.log('No server Response');
            
        }else if(error.response?.status === 409){
            console.log('Username Taken');
            
        }else {
            console.log('Registration Failed');
            
        }
    }
};
const Register = () => { 

    const userRef = useRef();


    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({
               username : user, 
               email: email,
                password: pwd
            }), {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            })

            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            
            
            
            
        } catch (error) {
            if (!error?.response) {
                console.log('No server Response');
                
            }else if(error.response?.status === 409){
                console.log('Username Taken');
                
            }else {
                console.log('Registration Failed');
                
            }
        }

    }
    
    return (
  <Form
    {...formItemLayout}
    name="register"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
      margin: '100px auto'
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input
       ref={userRef}
       onChange={(e)=> setUser(e.target.value)} 
       value={user}
       />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </Form.Item>

    <Form.Item
        name="password"
        label="Password"
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
            value={pwd}
        />
      </Form.Item>
   

      <Form.Item
        name="confirm"
        label="Confirm Password"
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
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
          Register
        </Button>
      </Form.Item>
  </Form>
)};
export default Register;