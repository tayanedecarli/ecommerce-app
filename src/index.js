import React from 'react';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeProvider'
import { render } from 'react-dom'
import { CartProvider } from 'react-use-cart'

render (
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'));

reportWebVitals();
