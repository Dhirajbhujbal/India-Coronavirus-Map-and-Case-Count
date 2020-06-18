import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
import { BrowserRouter as Router  } from "react-router-dom";
import ScrollPageonTop from './pages/route-config/scroll-pageon-top';

ReactDOM.render(
  <Router>
    <ScrollPageonTop>
      <App />
    </ScrollPageonTop>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
