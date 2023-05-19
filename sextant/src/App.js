// import logo from './logo.svg';
import "./App.css";

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our Sextant frontend!</p>
      </FancyBorder>
    </div>
  );
}

export default App;
