import './App.css';
import Banner from "./Banner";

let siteTitle = "sextant";
let siteLogo = "/images/sextant-logo1.svg";

function App() {
  return (
    <div className="App">
    <Banner
      title={siteTitle}
      logo={siteLogo}/>
    </div>
  );
}

export default App;
