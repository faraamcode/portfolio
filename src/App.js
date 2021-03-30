import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Homecontent from './components/Home';
import About from './components/About.jsx';
import Contacts from './components/Contact.jsx';
import Services from './components/Services';
import Footer from './components/footer.jsx'
import Projects from './components/projects'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    
<>
<Router>
  
<Nav/>
<Switch>
<Route path="/" exact component={Homecontent}/>
<Route path="/about" exact component={About}/>
<Route path="/projects" exact component={Projects}/>
<Route path="/services" exact component={Services}/>
<Route path="/contact" exact component={Contacts}/>

</Switch>
<Footer/>
</Router>
</>
  );
}

export default App;
