import { ThemeContext } from "../../pages/c.jsx";

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <div style={{ color: this.context.color }}>111</div>;
  }
}
export default ThemedButton;
