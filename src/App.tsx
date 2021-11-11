import React, {
  useEffect, useRef, useState,
} from 'react';
import Button from './Button/Button';
import './App.scss';

const buttonData = [{
  color: 'red',
  countDown: 0,
  counter: 0,
},
{
  color: 'green',
  countDown: 0,
  counter: 0,
},
{
  color: 'blue',
  countDown: 0,
  counter: 0,
},
];

const App = () => {
  const timerIdRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => () => {
    console.log('clear');
    clearInterval(timerIdRef.current);
  });

  const startHandler = () => {
    if (timerIdRef.current) { return; }

    console.log(123);
    // @ts-ignore
    timerIdRef.current = setInterval(() => setCount((num) => num + 1), 1000);
  };
  const stopHandler = () => {
    // @ts-ignore
    if (timerIdRef.current instanceof setInterval) {
      // @ts-ignore
      clearInterval(timerIdRef.current);
    }
    // @ts-ignore
    timerIdRef.current = null;
  };
  // @ts-ignore

  return (

    <>
      <div>
        <div>
          <div>
            Timer:
            {count}
            s
          </div>
          <div>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
          </div>
        </div>
        {
        buttonData.map(({
          color,
        }) => (

          <Button
            key={color}
            color={color}
          />
        ))
      }
      </div>

    </>
  );
};

export default App;
