import React, { Component } from 'react';
//import logo from './logo.svg';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import LocationTracker from './LocationTracker';
import Research from './Research';
import Teaching from './Teaching';

const PREFIX_URL='/~hamidi';

class App extends Component {
  render() {
    return (
        <div className="c-app u-container">
          <LocationTracker location={this.props.location} />
          <Header />
          <div className="c-app__body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/research" component={Research} />
              <Route path="/teaching" component={Teaching} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
