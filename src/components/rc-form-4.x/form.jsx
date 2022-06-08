import { useFormContext } from "./content";
import useForm from "./useForm";

export default function creatForm(
  { children, onFinish, onFinishFailed, form },
  ref
) {
  const [formInstance] = useForm(form);
  React.useImperativeHandle(ref, () => formInstance);
  formInstance.setCallBck({
    onFinish,
    onFinishFailed,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <useFormContext.Provider value={formInstance}>
        {children}
      </useFormContext.Provider>
    </form>
  );
}
