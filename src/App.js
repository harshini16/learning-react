import Navbar from './Navbar';
import Home from './Home';

function App() {
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
