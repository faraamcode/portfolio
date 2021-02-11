import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Homecontent from './components/Home';
import About from './components/About';
import Contacts from './components/Contact';
import Project from './components/Project';
import Services from './components/Services';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    
<>
<Router>
  
<Nav/>
<Switch>
<Route path="/" exact component={Homecontent}/>
<Route path="/about" exact component={About}/>
<Route path="/projects" exact component={Project}/>
<Route path="/services" exact component={Services}/>
<Route path="/contact" exact component={Contacts}/>

</Switch>
</Router>
</>
  );
}

export default App;
