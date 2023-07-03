import "./App.css";
import Banner from "./Banner";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Banner bannerName="Sextant" />
      <Container containerTitle="Container">
        <div>This is the card content</div>
      </Container>
      <Container containerTitle="IP Addresses">
        <div>This space is for the IP addresses of the following devices</div>
      </Container>
    </div>
  );
}

export default App;
