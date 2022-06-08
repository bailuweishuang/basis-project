import { formContext } from "./context";
import "./item.scss";

export default class Item extends React.Component {
  static contextType = formContext;
  constructor(props) {
    super(props);
    this.state = {
      errClass: null,
    };
  }
  componentDidMount() {
    this.unregisterFieldEntity = this.context.registerFieldEntity(this);
  }
  componentWillUnmount() {
    this.unregisterFieldEntity;
  }

  stroeChange = () => {
    this.forceUpdate();
  };

  validateErr = () => {
    const { validate } = this.context;
    const validateArr = validate();
    const { name } = this.props;
    let errIs =
      validateArr.length && validateArr.some((item) => item.name === name);
    this.setState({
      errClass: errIs ? "red" : null,
    });
  };
  getOther = () => {
    const { getFieldValue } = this.context;
    const { name } = this.props;
    const { errClass } = this.state;
    return {
      value: getFieldValue(name) || "",
      onChange: this.handleChange,
      className: errClass,
    };
  };
  handleChange = (e) => {
    const { setFieldsValue } = this.context;
    const { name } = this.props;
    setFieldsValue({
      [name]: e.target.value,
    });
    this.validateErr();
  };
  render() {
    const { children } = this.props;
    return <>{React.cloneElement(children, this.getOther())}</>;
  }
}
