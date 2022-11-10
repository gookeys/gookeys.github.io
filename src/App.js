import React from 'react';
import './App.css';
import './bootstrapgrid.css';
import './Main.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Home';
import Store from './Store';
import Contact from './contact';
import About from './about';
import Disclaimer from './disclaimer';
import Privacy from './privacy';
import minthtml5template from './mintHTML5';
import colorsinteriorhtml5template from './colorsHTML5';
import gchathtml5template from './gchatHTML5';
import geeohtml5template from './geeoHTML5';
import profilshtml5template from './profilsHTML5';
import thankyou from './thank-you';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends React.Component{
  render(){
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Store' component={Store}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/disclaimer' component={Disclaimer}/>
          <Route path='/privacy' component={Privacy}/>
          <Route path='/mintHTML5' component={minthtml5template}/>
          <Route path='/colorsHTML5' component={colorsinteriorhtml5template}/>
          <Route path='/gchatHTML5' component={gchathtml5template}/>
          <Route path='/geeoHTML5' component={geeohtml5template}/>
          <Route path='/profilsHTML5' component={profilshtml5template}/>
          <Route path='/thank-you' component={thankyou}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;
