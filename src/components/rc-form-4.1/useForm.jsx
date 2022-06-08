// 存储数据
class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callBack = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.getFieldValue = this.getFieldValue.bind(this);
  }
  setCallBack = (callBack) => {
    this.callBck = {
      ...this.callBack,
      ...callBack,
    };
  };
  registerFieldEntity = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((key) => key !== entity);
      delete this.store[entity.props.name];
    };
  };
  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.fieldEntities.forEach((item) => {
      for (let key in newStore) {
        if (item.props.name === key) {
          item.stroeChange();
        }
      }
    });
  };

  getFieldValue(name) {
    return this.store[name];
  }
  onSubmit() {
    const { onFinish, onFinishFailed } = this.callBck;
    const err = [];
    err.length > 0
      ? onFinishFailed(err, { ...this.store })
      : onFinish({ ...this.store });
  }
  validate = () => {
    const err = [];
    this.fieldEntities.forEach((entity) => {
      const { props } = entity;
      const { rules, name } = props;
      rules?.forEach((rule) => {
        if (rule.required && !this.store[name]) {
          err.push({
            name: name,
            message: rule.message,
          });
        }
      });
    });
    return err;
  };

  validateFields = (callBack) => {
    const err = this.validate();
    err.length > 0
      ? callBack(err, { ...this.store })
      : callBack(null, { ...this.store });

    this.fieldEntities.forEach((item) => {
      if (err.some((key) => key.name === item.props.name)) {
        item.validateErr();
      }
    });
  };
  getForm = () => {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      registerFieldEntity: this.registerFieldEntity,
      onSubmit: this.onSubmit,
      validateFields: this.validateFields,
      setCallBack: this.setCallBack,
      validate: this.validate,
    };
  };
}

export default function useForm(form) {
  const formCurrent = React.useRef();
  if (!formCurrent.current) {
    if (form) {
      formCurrent.current = form;
    } else {
      const formStore = new FormStore();
      formCurrent.current = formStore.getForm();
    }
  }
  return [formCurrent.current];
}
