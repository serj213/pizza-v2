import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import Basket from './Components/Basket';
import FullPizza from './Pages/FullPizza';

import './assets/scss/app.scss';

const App = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Router>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="basket" element={<Basket />} />
          <Route path="pizzas/:id" element={<FullPizza />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
