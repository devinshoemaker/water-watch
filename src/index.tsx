import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './providers/AuthProvider/AuthProvider';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
