import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useThemeHook } from './components/ThemeProvider'
import { Router } from "@reach/router"
import Navbar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  const[theme] = useThemeHook();
  return (
      <main className={theme ? 'bg-black' : 'bg-light-2'}>
        <Navbar />
        <Router>
          <Home path="/" />
          <Cart path="/cart" />
        </Router>
      </main>
  );
}

export default App;
