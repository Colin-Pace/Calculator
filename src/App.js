import './App.css';
import DisplayBar from './DisplayBar';
import Keypad from './Keypad';
import {useEffect, useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState(undefined);
  const [allClear, setAllClear] = useState(true);

  const compute = expression => {
    return evaluate(expression);
  }

  const onHandleClick = value => {
    if (display === '0') {
      setDisplay(value)
    } else if (value === 'AC') {
      setDisplay('0');
    } else if (value === 'CE') {
      let result = display.toString();
      if (result[result.length - 1 === ' ']) {
        result = result.substring(0, result.length - 2);
      } else {
        if (display.length === 1) {
          setDisplay('0');
        } else {
          result = result.substring(0, result.length - 1);
          setDisplay(result);
        }
      }
    } else if (
        (display[display.length - 1] === '+' ||
        display[display.length - 1] === '-' ||
        display[display.length - 1] === '*' ||
        display[display.length - 1] === '÷')
        &&
        (value === '+' ||
        value === '-' ||
        value === '*' ||
        value === '÷')
      ) {
        let result = display;
        result = result.substring(0, result.length - 1);
        result += ' ' + value;
        setDisplay(result);
        setAllClear(false);
      } else if (
        display[display.length - 1] === '+' ||
        display[display.length - 1] === '-' ||
        display[display.length - 1] === '*' ||
        display[display.length - 1] === '÷'
      ) {
        setAllClear(false);
        setDisplay(display + ' ' + value);
      } else if (
        value === '+' ||
        value === '-' ||
        value === '*' ||
        value === '÷'
      ) {
        setAllClear(false);
        setDisplay(display + ' ' + value);
      } else if (value === '=') {
        const result = compute(display);
        setExpression(display + " =");
        setDisplay(result);
        setAllClear(false);
      } else {
        setDisplay(display + value);
        setAllClear(false);
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
        allClear = {allClear}
      />
    </div>
  );
}

export default App;
