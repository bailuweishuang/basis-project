import { formContext } from "./context";
import useForm from "./useForm";

export default function creatForm(
  { children, form, onFinishFailed, onFinish },
  ref
) {
  const [formInstance] = useForm(form);
  formInstance.setCallBack({ onFinishFailed, onFinish });
  React.useImperativeHandle(ref, () => formInstance);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.onSubmit();
      }}
    >
      <formContext.Provider value={formInstance}>
        {children}
      </formContext.Provider>
    </form>
  );
}
