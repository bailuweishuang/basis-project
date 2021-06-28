//import styles from './style.less';
import "./style.less";
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
import { Input } from "antd";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputContent: [] };
  }
  componentDidMount() {
    const { inputNumber = 11 } = this.props;
    let inputContent = [];
    let n = inputNumber;
    while (n > 0) {
      --n;
      inputContent.push(n);
    }
    this.setState({
      inputContent: inputContent.sort((a, b) => a - b),
    });
  }
  inputOnChange = (e, i) => {
    const target = e.target;
    if (this[`ref${i + 1}`]) {
      if (target.value.length === target.maxLength) {
        this[`ref${i + 1}`].focus();
      }
    }
  };
  render() {
    const { inputContent } = this.state;
    let res = inputContent.map((i) => (
      <Input
        ref={(ref) => (this[`ref${i}`] = ref)}
        key={i}
        autoFocus={i === 0}
        maxLength="1"
        onChange={(e) => this.inputOnChange(e, i)}
      />
    ));
    return <div style={{ display: "flex" }}>{res}</div>;
  }
}
export default App;
