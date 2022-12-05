import './App.css';
import DisplayBar from './DisplayBar';
import Keypad from './Keypad';
import {useEffect, useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState(undefined);

  const compute = expression => {
    return evaluate(expression);
  }

  const onHandleClick = value => {
    if (display === '0') {
      setDisplay(value)
    } else if (
        (
          display[display.length - 1] === '+' ||
          display[display.length - 1] === '-' ||
          display[display.length - 1] === 'x' ||
          display[display.length - 1] === '÷'
        )
        &&
        value === '+' ||
        value === '-' ||
        value === 'x' ||
        value === '÷'
      ) {
        let result = display;
        result = result.substring(0, result.length - 1);
        result += ' ' + value;
        setDisplay(result);
      } else if (
        display[display.length - 1] === '+' ||
        display[display.length - 1] === '-' ||
        display[display.length - 1] === 'x' ||
        display[display.length - 1] === '÷'
      ) {
        setDisplay(display + ' ' + value);
      } else if (
        value === '+' ||
        value === '-' ||
        value === 'x' ||
        value === '÷'
      ) {
        setDisplay(display + ' ' + value);
      } else if (value === '=') {
        const result = compute(display);
        setExpression(display + " =");
        setDisplay(result);
      } else {
      setDisplay(display + value);
    }
  }

  return (
    <div>
      <DisplayBar
        display = {display}
        expression = {expression}
      />
      <Keypad 
        onHandleClick = {onHandleClick}
      />
    </div>
  );
}

export default App;
