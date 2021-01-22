import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default App;

