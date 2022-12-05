import './DisplayBar.css';
import {useState, useEffect} from 'react';

function DisplayBar(props) {
  const [expressionShown, setExpressionShown] = useState(false);

  useEffect(() => {
    if (props.expression !== undefined) {
      setExpressionShown(true);
    }

  }, [props.expression]);

  return (
    <div id = 'displayBar'>
      <div id = 'content'>
        <div id = {expressionShown === false ? '' : 'expression'}>
          {props.expression}
        </div>
        <div id = 'display'>
          {props.display}
        </div>
      </div>
    </div>
  );
}

export default DisplayBar;
