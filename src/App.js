import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Header from './components/Header';
 
ReactDOM.render(
    <div>
      <h1>Marcus Svehlak</h1>
      <Header />
      <Router history={browserHistory}>
          <Route path="/" component={Header} />
          <Route path="/about" component={Header} />
          <Route path="/projects" component={Header} />
      </Router>
    </div>,
  document.getElementById('mount')
);
