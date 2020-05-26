import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { NewInput } from 'component-library-hyx';
import './style.scss';

function Example() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(true);
  useEffect(() => {
    // window.addEventListener('scroll', () => {
    //   console.log(document.documentElement.scrollTop || document.body.scrollTop);
    // });
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 0) {
        setColor(false);
      }else {
        setColor(true);
      }
    };
  });

  return (
    <div>
      <p>You clicked {count} times 11</p>
      <NewInput></NewInput>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <div className={color ? 'transition' : 'transitione'}></div>
    </div>
  );
}
export default Example;
