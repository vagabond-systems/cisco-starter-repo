import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IpAdress from "./IpAdress";

function App() {
  return (
    <div className="App">
      <Banner bannerName="Sextant" />
      <Exhibit exhibitTitle="IP Adresses">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Exhibit exhibitTitle="IPv4">
            <IpAdress ipType="ipv6"></IpAdress>
          </Exhibit>
          <Exhibit exhibitTitle="IPv6">
            <IpAdress ipType="ipv6"></IpAdress>
          </Exhibit>
        </div>
      </Exhibit>
    </div>
  );
}

export default App;
