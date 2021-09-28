import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Python from './components/Python';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <div className="navBarA">
     <Navbar />
     </div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/python" exact component={Python} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
