import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a React Developer....</h2>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    fontFamily: 'Serif',
    border:'2px solid white',
    margin:'10px',
    padding:'10px',
    borderRadius:'10px'


  };
  return(
    <div style={personStyle}>
      <h1>I am Md. Robiul Hasan</h1>
      <h3>Now i'm learning React Js.</h3>
    </div>
  );
}

export default App;
