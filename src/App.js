import logo from './logo.svg';
import './App.css';
import ButtonComponent  from './ButtonComp';
import ImageComponent from './ImageComponent';
function App() {
  return (

    <div className="App">
      <header className="App-header">
        <ButtonComponent text='Space village'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <ImageComponent MySrc="http://placekitten.com/300" MyAlt="Cute cat" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;





