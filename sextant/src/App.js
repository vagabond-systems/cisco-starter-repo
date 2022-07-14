import './App.css';
import Footer from './components/footer/Footer';
import Panel from './components/panel/Panel';
import TopBanner from './components/topBanner/TopBanner';

function App() {
  return (
    <div className="App">
      <TopBanner title={'Sextant'} />
      <Panel />
      <Footer />
    </div>
  );
}

export default App;
