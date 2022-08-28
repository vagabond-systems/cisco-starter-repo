
import './App.css';
import Banner from "react-banner";
import "./index.css";
import "react-banner/dist/style.css";

function App() {
  return (
    <div className="App">
      <Banner
        logo="Sextant App"
        url={window.location.pathname}
        items={[
          { content: "Home", url: "/example" },
          { content: "Another", url: "/another" },
          {
            content: "Sextant Subset",
            url: "/children",
            children: [
              { content: "sub1", url: "/children/sub1" },
              { content: "sub2", url: "/children/sub2" },
              { content: "sub3", url: "/children/sub3" }
            ]
          }
        ]}
      />
    
    </div>
  );
}

export default App;
