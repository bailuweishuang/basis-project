import "./content.scss";
import { Button } from "antd";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  onCancle = () => {
    const { onCancle } = this.props;
    onCancle && onCancle();
  };
  onOk = () => {
    const { onOk } = this.props;
    onOk && onOk();
  };
  render() {
    const { footer, children, title } = this.props;
    return (
      <div className="content-parent">
        <div className="content-C">
          <div className="title">
            <p>{title ? title : "提示"}</p>
            <span onClick={this.onCancle}>X</span>
          </div>
          {children}
          {footer ? (
            footer
          ) : (
            <div className="footer">
              <Button onClick={this.onCancle}>关闭</Button>
              <Button type="primary" onClick={this.onOk}>
                保存
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content;
