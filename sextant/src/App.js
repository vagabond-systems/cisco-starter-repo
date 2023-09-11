import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import './App.css';

function App() {

    return (
        <div className="app">
            <Banner />
            <Exhibit heading="Sample Exhibit">
                {/* You can place other components or content here */}
                <p>This is a sample content inside the Exhibit component.</p>
            </Exhibit>
        </div>
    );

}

export default App;
