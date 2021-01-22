import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './components/About';
import './components/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <About />
      <Shop />
    </div>
  );
}

export default App;
