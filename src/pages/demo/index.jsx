import { useState, useEffect, useReducer } from 'react';
import { Button, Form, Input, Checkbox } from 'antd';
import { NewInput } from 'component-library-hyx';
import { nameContext } from '@/js/context-manager';
import Name from '../a';
import './style.scss';
const addNumber = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
};
function Example() {
  const [form] = Form.useForm();
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(true);
  const [number, dispatch] = useReducer(addNumber, 1);
  useEffect(() => {
    // window.addEventListener('scroll', () => {
    //   console.log(document.documentElement.scrollTop || document.body.scrollTop);
    // });
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 0) {
        setColor(false);
      } else {
        setColor(true);
      }
    };
  });
  const a = () => {
    new Promise((resolve, reject) => { });
  };

  const promise = (executor) => {
    const self = this;
    self.status = 'pending'; // 初始状态
    self.data = undefined; // promise的值
    self.resolveCallback = [];
    self.rejectCallback = [];
    function resolve(value) {
      if (self.status === 'pending') {
        self.status = 'resolve';
        self.data = value;
        for (let i = 0; i < self.rejectCallback.length; i++) {
          self.rejectCallback[i](value);
        }
      }
    }
    function reject(value) {
      if (self.status === 'pending') {
        self.status = 'reject';
        self.data = value;
        for (let i = 0; i < self.rejectCallback.length; i++) {
          self.rejectCallback[i](value);
        }
      }
    }
    executor(resolve, reject);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  promise.prototype.then = function (onresolve, onreject) {
    const self = this;
    let promise2;
    // 标准 不是方法 要忽略
    onresolve =
      typeof onresolve === 'function'
        ? onresolve
        : function (c) {
          return c;
        };
    onreject =
      typeof onreject === 'function'
        ? onreject
        : function (j) {
          return j;
        };
    if (self.status === 'pending') {
      return (promise2 = new promise(function (resolve, reject) {
        self.resolveCallback.push(function (resolve, reject) {
          try {
            const x = onresolve(slef.data);
            if (x instanceof promise) {
              x.then(resolve, reject);
            }
          } catch (e) {
            reject(e);
          }
        });
        self.rejectCallback.push(function (resolve, reject) {
          try {
            const x = onreject(slef.data);
            if (x instanceof promise) {
              x.then(resolve, reject);
            }
          } catch (e) {
            reject(e);
          }
        });
      }));
    }
    if (self.status === 'resolve') {
      return (promise2 = new promise(function (resolve, reject) {
        try {
          const x = onresolve(self.data);
          if (x instanceof promise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (e) {
          reject(e);
        }
      }));
    }
    if (self.status === 'reject') {
      return (promise2 = new promise(function (resolve, reject) {
        try {
          const x = onreject(self.data);
          if (x instanceof promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      }));
    }
  };

  // 策略模式
  const strategies = {
    name: (v) => {
      if (v === 1) {
        return true;
      }
      return false;
    },
    age: (v) => (v === 2 ? true : false),
    ie: (v) => (v === 3 ? true : false),
  };

  const validator = {
    create: (v = {}) => {
      let result = [];
      Object.keys(v).forEach((item) => {
        if (item && strategies[item]) {
          result.push(strategies[item](v[item]));
        }
      });
      return result;
    },
  };
  const c = validator.create({ name: 1, age: 4, ie: 3 });

  return (
    <div>
      <div>{number}</div>
      <Button onClick={() => dispatch({ type: 'add' })}>useReducer</Button>
      <nameContext.Provider value={{ count, setCount }}>
        <Name />
      </nameContext.Provider>
      <p>You clicked {count} times 111</p>
      <NewInput></NewInput>
      <Form
        {...layout}
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input
          // onBlur={(v) => {
          //   console.log(v.target.value);
          //   form.resetFields(['password', 'username']);
          //   form.setFields([
          //     {
          //       name: 'password',
          //       value: undefined,
          //       errors: ['密码错误'],
          //     },
          //   ]);
          // }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            // htmlType="submit"
            onClick={() => {
              form.validateFields(['password']).then((value) => {
                console.log(value, 12313);
              });
            }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <div className={color ? 'transition' : 'transitione'}></div>
    </div>
  );
}
export default Example;

// export default function StateExample(props) {
//   const [number, setNumber] = useState(0);
//   const [count, setCount] = useState(() => {
//     const { first, second } = props;
//     return first + second
//   })
//   return <div>
//     <p>{number}</p>
//     <p>{count}</p>
//     <Button onClick={() => {
//       let _r = number + 1
//       setNumber(_r)
//     }}>确定</Button>
//   </div>
// }
