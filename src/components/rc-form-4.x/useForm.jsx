// 储存数据

class FieldStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbackObj = {};
  }
  setCallBck = (callback) => {
    this.callbackObj = {
      ...this.callbackObj,
      ...callback,
    };
  };

  registerFieldEntity = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((f) => f !== entity);
      delete this.store[entity.props.name];
    };
  };

  validate = () => {
    const err = [];
    this.fieldEntities.forEach((item) => {
      const { rules, name } = item.props;
      const value = this.store[name];
      rules?.forEach((obj) => {
        if (obj.required && !value) {
          err.push({
            [name]: undefined,
            message: obj.message,
          });
        } else if (
          value &&
          obj.maxLength &&
          String(value).length > obj.maxLength
        ) {
          err.push({
            [name]: value,
            message: obj.message,
          });
        }
      });
    });
    return err;
  };
  submit = () => {
    const err = this.validate();
    const { onFinish, onFinishFailed } = this.callbackObj;
    if (err.length > 0) {
      onFinishFailed(err, { ...this.store });
    } else {
      onFinish({ ...this.store });
    }
  };
  getFieldValue = (name) => {
    return this.store[name];
  };
  setFieldValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.fieldEntities.forEach((item) => {
      for (let key in newStore) {
        if (item.props.name === key) {
          item.onStoreChange();
        }
      }
    });
  };

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      registerFieldEntity: this.registerFieldEntity,
      submit: this.submit,
      setCallBck: this.setCallBck,
    };
  };
}

export default function useForm(form) {
  const formRef = React.useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const fieldStore = new FieldStore();
      formRef.current = fieldStore.getForm();
    }
  }
  return [formRef.current];
}
