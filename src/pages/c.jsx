//import styles from './style.less';
import "./style.less";
import { Input, Button } from "antd";
// import { Context, Dailog } from "../components";
import createForm from "../components/rc-form-3.x/index";
// import Form from "../components/rc-form-4.x/index";
import Form from "../components/rc-form-4.1/index";
const pako = require("pako");
import { add } from "../store/dome/action";
// import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
// export default () => {
//   return (
//     // css 继承 和 单位
//     // <div className="parent">
//     //   <div className="son-one">第一</div>
//     //   <div className="son-two">第二</div>
//     //   <div className="son-three">第三</div>
//     //   <div className="son-four">第四</div>
//     // </div>

//     // css 层叠上下文
//     <div className="box">
//       <div className="first">
//         <img
//           src="https://img.zcool.cn/community/0137e05ee871dea801206621486f37.jpg@2o.jpg"
//           alt=""
//         />
//       </div>
//       <div className="second">
//         <img
//           src="https://img.zcool.cn/community/010de55ee871dda801206621080044.jpg@2o.jpg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

export const ThemeContext = React.createContext();
export const ThemeProvider = ThemeContext.Provider;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputContent: [],
//       dailogVisible: false,
//       theme: {
//         color: "red",
//       },
//     };
//     // this.formRef = React.createRef();
//   }

//   componentDidMount() {
//     const { inputNumber = 11 } = this.props;
//     console.log(this);

//     let inputContent = [];
//     let n = inputNumber;
//     while (n > 0) {
//       --n;
//       inputContent.push(n);
//     }
//     this.setState({
//       inputContent: inputContent.sort((a, b) => a - b),
//     });
//     const test = {
//       my: "super",
//       puper: [456, 567],
//       awesome: "pako",
//       name: "黄星翔",
//     };

//     const compressed = this.arrayBufferToBase64(
//       pako.gzip(JSON.stringify(test))
//     );
//     const restored = JSON.parse(
//       pako.inflate(
//         this.base64ToUint8Array(
//           "H4sIAAAAAAAAAKtWMlSyUspIzFDSUTICsl7O2P98/5SnE2YD+cZAviGQNoHS5kpW1UqmII4hiGsGZdXqKFmAZEpSi0tAJuxuAUqCOGCTS5VqawHryQfRZQAAAA=="
//         ),
//         { to: "string" }
//       )
//     );
//     console.log(JSON.stringify(compressed), restored);
//   }

//   // 解码
//   base64ToUint8Array = (base64String) => {
//     const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//     const base64 = (base64String + padding)
//       .replace(/\-/g, "+")
//       .replace(/_/g, "/");

//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);

//     for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   };
//   arrayBufferToBase64 = (array) => {
//     var binary = "";
//     var len = array.byteLength;
//     for (var i = 0; i < len; i++) {
//       binary += String.fromCharCode(array[i]);
//     }
//     return window.btoa(binary);
//   };
//   inputOnChange = (e, i) => {
//     const target = e.target;
//     if (this[`ref${i + 1}`]) {
//       if (target.value.length === target.maxLength) {
//         this[`ref${i + 1}`].focus();
//       }
//     }
//   };
//   render() {
//     const { inputContent } = this.state;
//     let res = inputContent.map((i) => (
//       <Input
//         ref={(ref) => (this[`ref${i}`] = ref)}
//         key={i}
//         autoFocus={i === 0}
//         maxLength="2"
//         onChange={(e) => this.inputOnChange(e, i)}
//       />
//     ));
//     // const {
//     //   getFieldDecorator,
//     //   getFieldsValue,
//     //   getFieldValue,
//     //   validateFields,
//     // } = this.props.form;
//     return (
//       <div>
//         <div style={{ display: "flex" }}>
//           {res}
//           {this.props.value}
//           {/* {getFieldDecorator("name", {
//             rules: [
//               {
//                 required: true,
//                 message: "必填",
//               },
//             ],
//           })(<Input placeholder="name" />)}
//           {getFieldDecorator("password")(<Input placeholder="password" />)}
//           <ThemeProvider value={this.state.theme}>
//             <Context />
//           </ThemeProvider>
//           <Button
//             onClick={() => {
//               validateFields((err, value) => {
//                 console.log(err, value);
//               });
//             }}
//           >
//             按钮
//           </Button> */}
//         </div>
//         <Form
//           onFinish={(value) => {
//             console.log(value);
//           }}
//           ref={(ref) => (this.formRef = ref)}
//           onFinishFailed={(err, value) => {
//             console.log(err, value);
//           }}
//         >
//           <Form.Item
//             name="name"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your username!",
//               },
//               {
//                 maxLength: 4,
//                 message: "超出最长",
//               },
//             ]}
//           >
//             <Input></Input>
//           </Form.Item>
//           <Form.Item name="password">
//             <Input></Input>
//           </Form.Item>
//           <button type="submit">按钮</button>
//         </Form>
//         {/* <Button htmlType="submit">提交</Button> */}
//         <Dailog
//           visible={this.state.dailogVisible}
//           onOk={() => {
//             const { validateFields } = this.formRefModal;
//             validateFields((err, value) => {
//               if (!err) {
//                 console.log(value);
//                 this.setState({
//                   dailogVisible: false,
//                 });
//               }
//             });
//           }}
//         >
//           <Form
//             onFinish={(value) => {
//               console.log(value);
//             }}
//             ref={(ref) => (this.formRefModal = ref)}
//             onFinishFailed={(err, value) => {
//               console.log(err, value);
//             }}
//           >
//             <Form.Item
//               name="name1"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your username!",
//                 },
//                 {
//                   maxLength: 4,
//                   message: "超出最长",
//                 },
//               ]}
//             >
//               <Input></Input>
//             </Form.Item>
//             <Form.Item name="password1">
//               <Input></Input>
//             </Form.Item>
//           </Form>
//         </Dailog>
//         <Button
//           onClick={() => {
//             this.props.add();
//             this.setState({
//               dailogVisible: true,
//             });
//           }}
//         >
//           弹窗
//         </Button>
//       </div>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return {
//     value: state.dome,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       add,
//     },
//     dispatch
//   );
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default function AntdFormPage(props) {
//   // const [form] = Form.useForm();
//   // console.log(form)
//   const onFinish = (val) => {
//     console.log("onFinish", val); //sy-log
//   };
//   const onFinishFailed = (val) => {
//     console.log("onFinishFailed", val); //sy-log
//   };

//   useEffect(() => {
//     // form.setFieldsValue({ username: "defalut" });
//   }, []);

//   return (
//     <div>
//       <h3>AntdFormPage</h3>
//       <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Form.Item name="username" label="姓名">
//           <input placeholder="username placeholder" />
//         </Form.Item>
//         <Form.Item name="password" label="密码">
//           <input placeholder="password placeholder" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" size="large" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }
// import creatStore from "../store/index";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.unSubscribe = creatStore.subscribe(() => {
//       this.forceUpdate();
//     });
//   }
//   componentWillUnmount() {
//     this.unSubscribe && this.unSubscribe();
//   }
//   render() {
//     console.log(creatStore);
//     return (
//       <div>
//         <div>{creatStore.getState()}</div>
//         <button
//           onClick={() => {
//             creatStore.dispatch({
//               type: "add",
//               key: 2,
//             });
//           }}
//         >
//           安妮
//         </button>
//         <button
//           onClick={() => {
//             creatStore.dispatch((getState,dispatch1) => {
//               setTimeout(() => {
//                 dispatch1({
//                   type: "add",
//                   key: 2,
//                 });
//               }, 1000);
//             });
//           }}
//         >
//           异步
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
// import { useSelector } from "react-redux";
import { connect, Context } from "../components/my-redux/provider";
import Child from "./child";
function App(props) {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const add = () => {
  //   dispatch({
  //     type: "add",
  //     key: 2,
  //   });
  // };
  // console.log(state);
  // const reduces = (state = 0, action) => {
  //   switch (action.type) {
  //     case "add":
  //       return state + action.preload;
  //     default:
  //       return state;
  //   }
  // };
  console.log(props, "props");
  const innerFunction = (n) => n + 2;
  const [number, setNumber] = React.useState(0);
  // const [stateNumber, dispatch] = React.useReducer(reduces, 0, innerFunction);
  const ss = React.useMemo(() => {
    console.log("useMeno");
    return number;
  }, [number]);
  const fun = () => {
    console.log(222);
  };
  const child = React.useMemo(() => <Child value={number} />, [number]);
  return (
    <div>
      {/* <p>{state.dome}</p> */}
      {/* 年龄：{stateNumber} */}
      {number}
      {props.dome}
      <button onClick={add}>add</button>
      <button
        onClick={() => {
          props.dispatch({
            type: "add",
            key: 2,
          });
        }}
      >
        add
      </button>
      {child}
      <button onClick={() => setNumber((number) => number + 1)}>add</button>
    </div>
  );
}
export default connect()(App);
