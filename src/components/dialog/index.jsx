import Content from "./content";

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    const dom = document.body;
    this.node = document.createElement("div");
    dom.appendChild(this.node);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    const { visible } = this.props;
    this.setState({
      visible,
    });
  }
  componentWillReceiveProps(prop) {
    const { visible } = prop;
    this.setState({
      visible,
    });
  }

  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node);
    }
  }
  onOk = () => {
    const { onOk } = this.props;
    if (onOk) {
      onOk();
    } else {
      this.setState({
        visible: false,
      });
    }
  };
  onCancle = () => {
    const { onCancal } = this.props;
    if (onCancal) {
      onCancle();
    } else {
      this.setState({
        visible: false,
      });
    }
  };
  render() {
    const { visible } = this.state;
    const { footer, children } = this.props;
    return visible
      ? ReactDOM.createPortal(
          <Content
            footer={footer}
            children={children}
            onOk={this.onOk}
            onCancle={this.onCancle}
          />,
          this.node
        )
      : null;
  }
}

export default Dialog;
