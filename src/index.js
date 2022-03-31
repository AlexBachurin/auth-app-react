import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>

    <Router>

      <AppProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppProvider>


    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


