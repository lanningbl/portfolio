import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from 'pages/Home';
import Navigation from 'layout/Navigation';
import Footer from 'layout/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
