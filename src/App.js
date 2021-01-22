import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '/components/About';
import '/components/Shop';
import '/components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <About />
      <Shop />
    </div>
  );
}

export default App;
