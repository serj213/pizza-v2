import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, decrementByAmount } from './redux/slices/calculateSlice';

import Home from './Pages/Home';
import Header from './Components/Header';
import Basket from './Components/Basket';

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
