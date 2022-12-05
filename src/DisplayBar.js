import './DisplayBar.css';

function DisplayBar(props) {
  return (
    <div id = 'displayBar'>
      <div id = 'content'> 
         <div id = 'expression'>
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
