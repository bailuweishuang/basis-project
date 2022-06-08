import { useFormContext } from "./content";

export default class Field extends React.Component {
  static contextType = useFormContext;

  componentDidMount() {
    this.unregisterFieldEntity = this.context.registerFieldEntity(this);
  }
  componentWillUnmount() {
    this.unregisterFieldEntity();
  }
  // 返回想要添加的属性
  handleChaneg = (e) => {
    const { name } = this.props;
    const { value } = e.target;
    this.context.setFieldValue({ [name]: value });
  };
  onStoreChange = () => {
    this.forceUpdate();
  };
  getControlled = () => {
    const { name } = this.props;
    return {
      value: this.context.getFieldValue(name) || "",
      onChange: this.handleChaneg,
    };
  };
  render() {
    const { children } = this.props;
    return <>{React.cloneElement(children, this.getControlled())}</>;
  }
}
