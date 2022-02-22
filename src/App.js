import './App.css';

function clock() {
  const element = (
    <div className='App'>
      <h1>Helloworld!</h1>
      <h2>It's {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return(
    element
  )
}
setInterval(clock, 1000);
export default clock;
