import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import Basket from './Components/Basket';

import './assets/scss/app.scss';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
