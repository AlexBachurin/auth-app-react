import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthContext'
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


