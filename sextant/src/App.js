import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

function App() {
  return (
    <div className="App">
      <Banner bannerName="Sextant" />
      <Exhibit exhibitTitle="Exhibit">
        <div>This is the card content</div>
      </Exhibit>
      <Exhibit exhibitTitle="IP Addresses">
        <div>This space is for the IP addresses of the following devices</div>
      </Exhibit>
    </div>
  );
}

export default App;
