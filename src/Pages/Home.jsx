import React, { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import PizzaBlockLoader from '../Components/PizzaBlock/PizzaBlockLoader';
import Pagination from '../Components/Pagination';

const Home = ({ searchValue }) => {
  const [dataPizza, setDataPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const { categoria, sortBy, currentPage } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const changeCategory = (obj) => {
    dispatch(setCategory(obj));
  };

  const changeSortBy = (obj) => {
    dispatch(setSortBy(obj));
  };

  React.useEffect(() => {
    setIsLoading(false);

    const category = categoria.categorId === 0 ? '?' : '?category=' + categoria.categorId;
    const sort = sortBy.sortProperty.replace('-', '');
    const order = sortBy.sortProperty.includes('-') ? 'asc' : 'desc';
    const limit = 3;

    axios
      .get(
        `https://6287dd3f7864d2883e8e1808.mockapi.io/serj/pizzas${category}&page=${currentPage}&limit=${limit}&sortby=${sort}&order=${order}`,
      )
      .then(({ data }) => {
        setDataPizza(data);
        setIsLoading(true);
      });
  }, [categoria, sortBy, currentPage]);

  useEffect(() => {
    const params = {
      categoria: categoria.categorId ? categoria.categorId : null,
      sortBy: sortBy.sortProperty,
      currentPage,
    };
    // console.log(params);
    const url = qs.stringify(params, { skipNulls: true });

    navigate(`..//?${url}`);
  }, [categoria, sortBy, currentPage]);

  const pizzas = dataPizza
    .filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => {
      return <PizzaBlock key={pizza.id} {...pizza} />;
    });

  const skeleton = [...new Array(6)].map((item, index) => {
    return <PizzaBlockLoader key={index} />;
  });

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories setActiveCategoria={changeCategory} activeCategoria={categoria} />
          <Sort setActiveSort={changeSortBy} activeSort={sortBy} />
        </div>
        <h2 className="content__title">
          {categoria.categorId === 0 ? categoria.name + ' пиццы' : categoria.name}
        </h2>
        <div className="content__items">{isLoading ? pizzas : skeleton}</div>

        <Pagination currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
