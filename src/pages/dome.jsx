import { useState } from 'react';
import { Button } from 'antd';
import { NewInput } from 'component-library-hyx';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times 再次尝试123</p>
      <NewInput></NewInput>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
export default Example;
