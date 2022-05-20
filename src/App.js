import React from 'react';

import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlock from './Components/PizzaBlock';

import './assets/scss/app.scss';

const dataPizza = [
  {
    id: 0,
    name: 'Мексиканская',
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    price: 345,
    types: [0, 1],
    category: 0,
    size: [26, 30, 40],
    rating: 4,
  },

  {
    id: 1,
    name: 'Американская',
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    price: 345,
    types: [0, 1],
    category: 0,
    size: [26, 30, 40],
    rating: 4,
  },

  {
    id: 2,
    name: 'Итальянская',
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    price: 345,
    types: [0, 1],
    category: 0,
    size: [26, 30, 40],
    rating: 4,
  },

  {
    id: 3,
    name: 'Русская',
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    price: 345,
    types: [0, 1],
    category: 0,
    size: [26, 30, 40],
    rating: 4,
  },

  {
    id: 4,
    name: 'Болгарская',
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    price: 345,
    types: [0, 1],
    category: 0,
    size: [26, 30, 40],
    rating: 4,
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {dataPizza.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
