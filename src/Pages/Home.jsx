import React from 'react';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import PizzaBlockLoader from '../Components/PizzaBlock/PizzaBlockLoader';

const Home = () => {
  const [dataPizza, setDataPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6287dd3f7864d2883e8e1808.mockapi.io/serj/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDataPizza(json);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? dataPizza.map((pizza) => {
                return <PizzaBlock key={pizza.id} {...pizza} />;
              })
            : [...new Array(6)].map((item, index) => {
                return <PizzaBlockLoader key={index} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Home;
