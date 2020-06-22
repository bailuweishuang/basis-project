import { useState, useEffect } from 'react';
import './style.scss';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';

let num = 0;
function Login() {
  const [form] = Form.useForm();
  const history = useHistory();
  const imgArr = [
    {
      color: 'rgba(84, 97, 150, 0.5)',
      url: 'https://img.zcool.cn/community/0137e05ee871dea801206621486f37.jpg@2o.jpg',
    },
    {
      color: 'rgba(255, 225, 134, 0.4)',
      url:
        'https://img.zcool.cn/community/018b055ee871dea801215aa08bb40d.jpg@3000w_1l_2o_100sh.jpg',
    },
    {
      color: 'rgba(167, 154, 106, 0.5)',
      url: 'https://img.zcool.cn/community/010de55ee871dda801206621080044.jpg@2o.jpg',
    },
  ];
  const [background, setBackground] = useState(imgArr[0]);
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const submit = () => {
    form.validateFields().then((value) => {
      console.log(value, 12313);
      history.push('/c')
    });
  };
  const time = () => {
    setInterval(() => {
      num++;
      if (num > 2) {
        num = 0;
      }
      setBackground(imgArr[num]);
    }, 3000);
  };
  useEffect(() => {
    time();
    return () => {
      clearInterval(time);
    };
  }, background);
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${background.url})`,
      }}>
      <div
        className="login-form"
        style={{
          backgroundColor: background.color,
        }}>
        <Form form={form}>
          <Form.Item
            {...layout}
            label="用户名"
            name="name"
            rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            {...layout}
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={submit}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
