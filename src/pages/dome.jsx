import { useState } from 'react';
import { Button } from 'antd';
import { NewInput } from 'component-library-hyx';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times 修改1231</p>
      <NewInput></NewInput>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
export default Example;
