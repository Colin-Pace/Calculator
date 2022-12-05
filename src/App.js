import './App.css';
import DisplayBar from './DisplayBar';
import Keypad from './Keypad';
import {useEffect, useState} from 'react';

function App() {
  const [display, setDisplay] = useState('0');

  const onHandleClick = value => {
    if (display === '0') {
      setDisplay(value)
    } else {
      setDisplay(display + value);
    }
  }

  return (
    <div>
      <DisplayBar
        display = {display}
      />
      <Keypad 
        onHandleClick = {onHandleClick}
      />
    </div>
  );
}

export default App;
