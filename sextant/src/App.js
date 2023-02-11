import './App.css';
import Banner from "./Banner";
import Exhibit from "./Exhibit";

let siteTitle = "sextant";
let siteLogo = "/images/sextant-logo1.svg";

function App() {
  return (
    <div className="App">
    <Banner
      title={siteTitle}
      logo={siteLogo}/>
      <Exhibit header="Data">
        <h3>#### Example</h3>
      </Exhibit>
      <Exhibit header="Data">
        <h3>#### Example</h3>
      </Exhibit>
      <Exhibit header="Data">
        <h3>#### Example</h3>
      </Exhibit>
      <Exhibit header="Data">
        <h3>#### Example</h3>
      </Exhibit>
    </div>
  );
}

export default App;
