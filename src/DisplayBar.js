import './DisplayBar.css';

function DisplayBar(props) {
  return (
    <div id = 'displayBar'>
      <div id = 'content'>
        {props.display}
      </div>
    </div>
  );
}

export default DisplayBar;
