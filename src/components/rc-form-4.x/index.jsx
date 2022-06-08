import _Form from "./form";
import Field from "./field";
import UseForm from "./useForm";
const Form = React.forwardRef(_Form);
Form.Item = Field;
Form.useForm = UseForm;
export { Field, UseForm };
export default Form;
