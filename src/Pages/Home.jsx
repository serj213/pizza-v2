import React from 'react';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import PizzaBlockLoader from '../Components/PizzaBlock/PizzaBlockLoader';
import Pagination from '../Components/Pagination';

const Home = ({ searchValue }) => {
  const [dataPizza, setDataPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activeCategoria, setActiveCategoria] = React.useState({
    name: 'Все',
    categorId: 0,
  });
  const [activeSort, setActiveSort] = React.useState({
    name: 'Популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(false);
    console.log('currentPage', currentPage);

    const category =
      activeCategoria.categorId === 0 ? '?' : '?category=' + activeCategoria.categorId;
    const sort = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
    const limit = 3;

    fetch(
      `https://6287dd3f7864d2883e8e1808.mockapi.io/serj/pizzas${category}&page=${currentPage}&limit=${limit}&sortby=${sort}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDataPizza(json);
        setIsLoading(true);
      });
  }, [activeCategoria, activeSort, currentPage]);

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
          <Categories setActiveCategoria={setActiveCategoria} activeCategoria={activeCategoria} />
          <Sort setActiveSort={setActiveSort} activeSort={activeSort} />
        </div>
        <h2 className="content__title">
          {activeCategoria.categorId === 0 ? activeCategoria.name + ' пиццы' : activeCategoria.name}
        </h2>
        <div className="content__items">{isLoading ? pizzas : skeleton}</div>

        <Pagination changePage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Home;
