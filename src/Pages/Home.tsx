import React, { useEffect } from 'react';
import qs from 'qs';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy, getParamsUrl } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import PizzaBlockLoader from '../Components/PizzaBlock/PizzaBlockLoader';
import Pagination from '../Components/Pagination';
import { sortData } from '../Components/Sort';
import { fetchPizzas, Status } from '../redux/slices/pizzaSlice';
import { RootState } from '../redux/store';
import { categoria, sort } from '../redux/slices/filterSlice';

type homeProps = {
  searchValue: string;
};

const Home: React.FC<homeProps> = ({ searchValue }) => {
  const navigate = useNavigate();
  const isMounted = React.useRef(false);

  const { categoria, sortBy, currentPage } = useSelector((state: RootState) => state.filters);

  const { items, status } = useSelector((state: RootState) => state.pizzas);
  const dispatch = useAppDispatch();

  const changeCategory = (obj: categoria) => {
    dispatch(setCategory(obj));
  };

  const changeSortBy = (obj: any) => {
    dispatch(setSortBy(obj));
  };

  const getPizzas = () => {
    const category = categoria.categorId === 0 ? '?' : '?category=' + categoria.categorId;
    const sort = sortBy.sortProperty.replace('-', '');
    const order = sortBy.sortProperty.includes('-') ? 'asc' : 'desc';
    const limit = 3;

    dispatch(
      fetchPizzas({
        category,
        sort,
        order,
        limit,
        currentPage,
      }),
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoria, sortBy, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        categoria: categoria.categorId > 0 ? categoria.categorId : null,
        sortBy: sortBy.sortProperty,
        currentPage,
      };

      const url = qs.stringify(params, { skipNulls: true });

      navigate(`..//?${url}`);
    }
  }, [categoria, sortBy, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortUrl = sortData.find((sort) => sort.sortProperty === params.sortBy);

      if (sortUrl) {
        params.sortBy = sortUrl;
      }

      dispatch(getParamsUrl(params));
    }

    isMounted.current = true;
  }, []);

  const pizzas =
    items.length > 0 ? (
      items
        .filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((pizza) => {
          return <PizzaBlock key={pizza.id} {...pizza} />;
        })
    ) : (
      <div>?? ?????????????????? ???????????? ?????? ????????</div>
    );

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

        {status === Status.REJECTED ? (
          <div>
            ???????????? ?????? ?????????????????? ????????,
            <br /> ???????????????????? ??????????
          </div>
        ) : (
          <>
            <h2 className="content__title">
              {categoria.categorId === 0 ? categoria.name + ' ??????????' : categoria.name}
            </h2>

            <div className="content__items">{status === Status.SUCCESS ? pizzas : skeleton}</div>
          </>
        )}

        <Pagination currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
