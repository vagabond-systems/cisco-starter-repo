import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App(Banner) {
    return (
        <div style ={{display: 'flex', justifyContent:'center', alignItems:'center', height:'100%'} }>
            <h1>Hello, and Welcome to Sextant!{Banner.test}</h1>
            </div>
    );
}

class Exhibit extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%' }}>
                <h1>This is for our exhibit component!</h1>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Exhibit />);

export default App;
