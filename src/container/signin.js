import React from 'react';
import { Form, Input ,Button,message } from 'antd';
import { TwitterOutlined,GoogleOutlined  } from '@ant-design/icons';
import { AuthWrapper } from './style';
import Heading from '../components/heading/heading';

function SignIn() {
  const [form] = Form.useForm();
  const handleSubmit = () => {
   try {
    form.validateFields()
    message.success("Successfully Login")
   } catch (error) {
    console.log("error");
    message.error("Please Enter valid input ",error)
   }
  };
  return (
    <AuthWrapper>
      <p className="auth-notice">
        Don&rsquo;t have an account? <a href="#">Sign up now</a>
      </p>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign in to <span className="color-secondary">Dribbble</span>
          </Heading>
          <ul className="social-login">
            <li>
              <Button className="btn-signin-google" htmlType="submit" type="primary" size="large">
              <GoogleOutlined /> 
                <span>Sign in with Google</span>
              </Button>
            </li>
            <li>
              <a className="twitter-sign" href="#">
                <TwitterOutlined />
              </a>
            </li>
          </ul>
          <p className="form-divider">
            <span>Or</span>
          </p>
          <Form.Item
            name="username"
            rules={[{ message: 'Please input your username or Email!', required: true }]}
            initialValue="name@example.com"
            label="Username or Email Address"
          >
            <Input style={{ padding:'10px'}} type='email'/>
          </Form.Item>
          <Form.Item name="password" initialValue="123456" label="Password"  rules={[{ message: 'Please input your password!', required: true }]}>
            <Input.Password placeholder="Password" style={{ padding:'10px'}} />
          </Form.Item>
          <div className="auth-form-action">
            <a className="forgot-pass-link" href="#">
              Forgot password?
            </a>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
