import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import Map from './Map';
import Quote from './Quote';
import Image from './Image';

function App() {
return (
<div className="App">
<Banner />
<Exhibit>
<Map />
</Exhibit>
<Exhibit>
<Quote />
</Exhibit>
<Exhibit>
<Image />
</Exhibit>
</div>
);
}

export default App;