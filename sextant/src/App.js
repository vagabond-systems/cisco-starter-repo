import "./App.css";
import Banner from "./Banner";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Banner />
      <Container>
        <div className="card">This is the content in the card</div>
      </Container>
    </div>
  );
}

export default App;
