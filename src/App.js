import './App.css';

const element = <Hello name="Dinda" />;
function Hello(props) {
  return(
    <h1>Hello, {props.name}</h1>
  )
}

function runElement() {
  return(
    element
  )
}

export default runElement;
