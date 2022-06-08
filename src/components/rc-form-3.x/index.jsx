// 高阶组件 接受一个组件 返回一个组件
export default function creatForm(WrappedCompent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    getFieldsValue = () => {
      return this.state;
    };
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
    getFieldDecorator = (field, option) => (WrappedC) => {
      this.options[field] = option;
      return React.cloneElement(WrappedC, {
        name: field,
        value: this.state[field] || "",
        onChange: this.handleChange,
      });
    };
    setFieldsValue = (newState) => {
      this.setState(newState);
    };
    getFieldValue = (name) => {
      return this.state[name];
    };
    validateFields = (callBack) => {
      let err = [];
      for (let i in this.options) {
        this.options[i]?.rules?.forEach((item) => {
          if (item.required === true) {
            if (!this.state[i]) {
              err.push({ [i]: item.message });
            }
          }
        });
      }
      if (err.length > 0) {
        callBack(err, this.state);
      } else {
        callBack(null, this.state);
      }
    };
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          getFieldsValue: this.getFieldsValue,
          getFieldValue: this.getFieldValue,
          setFieldsValue: this.setFieldsValue,
          validateFields: this.validateFields,
        },
      };
    };
    render() {
      return <WrappedCompent {...this.props} {...this.getForm()} />;
    }
  };
}
