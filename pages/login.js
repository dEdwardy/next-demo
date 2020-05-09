import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Component } from 'react';
import Router from 'next/router';
const LoginUI = (props) => {
  return (
    <>
      <div className="login-wrapper">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          style={{ minWidth: "440px" }}
          onFinish={props.onFinish}
        >
          <Form.Item>
            <h2 style={{ color: '#fff', textAlign: 'center' }}>Login</h2>
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <span className="login-form-forgot">
              <a href="" style={{ margin: '0 10px' }}>
                Forgot password
            </a>
            Or <a href="">register now!</a>
            </span>

          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        <style global jsx>{`
          .login-wrapper {
            background-image: url("https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1588923792&di=f3860932ec1f06a54399b0e7295067ae&src=http://bpic.588ku.com/back_pic/00/09/47/77562eea631a31c.jpg");
            background-size: 100% 100%;
            height: 100vh;
          }
          .login-wrapper .login-form {
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            background-color:rgba(0,0,0,.3);
            padding:20px 30px 10px 30px;
            border-radis:8px;
          }
          .login-wrapper .login-form-forgot {
            float: right;
          }
          .login-wrapper .ant-col-rtl .login-form-forgot {
            float: left;
          }
          .login-wrapper .login-form-button {
            width: 100%;
          }
        `}</style>
      </div>
    </>
  );
};
class Login extends Component {
  constructor(props) {
    super(props)
    this.onFinish = this.onFinish.bind(this)
  }
  onFinish(values) {
    const { password, username } = values
    if (username && password) {
      Router.push({
        pathname: '/'
      })
    } else {
      return
    }
  };
  render() {
    return (
      <LoginUI onFinish={this.onFinish} />
    )
  }
}
export default Login;
