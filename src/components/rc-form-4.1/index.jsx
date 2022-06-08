import _Form from "./form";
import Item from "./item";

const Form = React.forwardRef(_Form);
Form.Item = Item;

export default Form;

export { Item };
