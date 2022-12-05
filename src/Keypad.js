import './Keypad.css';
import {useEffect} from 'react';

function Keypad(props) {
  const handleOnClick = e => {
    props.onHandleClick(e.target.abbr);
  }

  return (
    <div>
      <table> 
        <tbody>
          <tr>
            <th className = 'operation'>Rad</th>
            <th className = 'operation'>Deg</th>
            <th className = 'operation'>x!</th>
            <th onClick = {e => handleOnClick(e)} abbr = '(' className = 'operation'>(</th>
            <th onClick = {e => handleOnClick(e)} abbr = ')' className = 'operation'>)</th>
            <th onClick = {e => handleOnClick(e)} abbr = '%' className = 'operation'>%</th>
            <th 
              onClick = {e => handleOnClick(e)} 
              abbr = {props.allClear === true ? 'AC' : 'CE'} 
              className = 'operation'>{ props.allClear === true ? 'AC' : 'CE' }
            </th>
          </tr>

          <tr>
            <th className = 'operation'>Inv</th>
            <th className = 'operation'>sin</th>
            <th className = 'operation'>In</th>
            <th onClick = {e => handleOnClick(e)} abbr = '7' className = 'integer'>7</th>
            <th onClick = {e => handleOnClick(e)} abbr = '8' className = 'integer'>8</th>
            <th onClick = {e => handleOnClick(e)} abbr = '9' className = 'integer'>9</th>
            <th onClick = {e => handleOnClick(e)} abbr = '÷' className = 'operation'>÷</th>
          </tr>

          <tr>
            <th className = 'operation'>Pi</th>
            <th className = 'operation'>cos</th>
            <th className = 'operation'>log</th>
            <th onClick = {e => handleOnClick(e)} abbr = '4' className = 'integer'>4</th>
            <th onClick = {e => handleOnClick(e)} abbr = '5' className = 'integer'>5</th>
            <th onClick = {e => handleOnClick(e)} abbr = '6' className = 'integer'>6</th>
            <th onClick = {e => handleOnClick(e)} abbr = '*' className = 'operation'>*</th>
          </tr>

          <tr>
            <th className = 'operation'>e</th>
            <th className = 'operation'>tan</th>
            <th className = 'operation'>Sqrt</th>
            <th onClick = {e => handleOnClick(e)} abbr = '1' className = 'integer'>1</th>
            <th onClick = {e => handleOnClick(e)} abbr = '2' className = 'integer'>2</th>
            <th onClick = {e => handleOnClick(e)} abbr = '3' className = 'integer'>3</th>
            <th onClick = {e => handleOnClick(e)} abbr = '-' className = 'operation'>-</th>
          </tr>

          <tr>
            <th className = 'operation'>Ans</th>
            <th className = 'operation'>EXP</th>
            <th className = 'operation'>exp</th>
            <th onClick = {e => handleOnClick(e)} abbr = '0' className = 'integer'>0</th>
            <th id = 'period' className = 'integer'>.</th>
            <th onClick = {e => handleOnClick(e)} abbr = '=' className = 'equalsSign'>=</th>
            <th onClick = {e => handleOnClick(e)} abbr = '+' className = 'operation'>+</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Keypad;
