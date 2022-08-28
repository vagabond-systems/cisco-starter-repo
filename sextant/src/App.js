
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
            content: "Link w/ Children",
            url: "/children",
            children: [
              { content: "John", url: "/children/john" },
              { content: "Jill", url: "/children/jill" },
              { content: "Jack", url: "/children/jack" }
            ]
          }
        ]}
      />
    
    </div>
  );
}

export default App;
