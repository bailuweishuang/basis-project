import { useState } from 'react';
import { Button } from 'antd';
// import { NewInput } from 'component-library-hyx/src/components';
import { addSome, Debounce } from 'npm-react-dom';
import { Errors } from '@/components';
function Example() {
  const [count, setCount] = useState(0);
  console.log(addSome(1, 2), '1111');
  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <NewInput /> */}
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
export default Example;
