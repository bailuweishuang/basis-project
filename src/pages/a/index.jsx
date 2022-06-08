import { useContext, useMemo, useState } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { nameContext } from "@/js/context-manager";

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const name = useContext(nameContext);
//     console.log(name, 123);
//     const { history } = this.props;
//     return (
//       <div>
//         1231
//         <Button onClick={() => history.push('/a/childrent456/detail')}>12321</Button>
//       </div>
//     );
//   }
// }
export default () => {
  const name = useContext(nameContext);
  const [inputName, setName] = useState(null);
  const history = useHistory();
  return useMemo(() => {
    return (
      <div>
        1231
        <Button onClick={() => history.push("/a/childrent456/detail")}>
          {Util.isObject(name) ? name.count : name}
        </Button>
        {name.setCount ? (
          <Button onClick={() => name.setCount(name.count + 1)}>增加</Button>
        ) : null}
        <input type="text" value={inputName} />
      </div>
    );
  }, [name]);
};
