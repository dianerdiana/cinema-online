import 'bootstrap/dist/css/bootstrap.min.css';
import "video-react/dist/video-react.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'

import { UserContextProvider } from "./context/userContext";

ReactDOM.render(
  <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>,
  document.getElementById('root')
);
