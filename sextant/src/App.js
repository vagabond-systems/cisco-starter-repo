import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <title>Sextant App</title>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <section class="header">
          <h1>Sextant App</h1>
          <p>By Bryonna Gray</p>
        </section>
        <script type="application/javascript">
          function getIP(json){"https://api.ipify.org?format=json"}
          {document.write("My public IPv4 address is: ", json.ip)}
        </script>
        <script
          type="application/javascript"
          src="https://api.ipify.org?format=jsonp&callback=getIP"
        ></script>
      </body>
    </div>
  );
}

export default App;
