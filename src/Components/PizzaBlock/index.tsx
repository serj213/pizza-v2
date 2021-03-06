import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/slices/basketSlice';

export type pizzaBlockProps = {
  id: string;
  name: string;
  img: string;
  price: number;
  types: number[];
  size: number[];
};

const PizzaBlock: React.FC<pizzaBlockProps> = ({ id, name, img, price, types, size }) => {
  const cart = useSelector((state: any) => state.basket.items.find((item: any) => item.id === id));

  const count = cart ? cart.count : 0;

  const dispatch = useDispatch();
  const typeName = ['Тонкое', 'Толстое'];
  const [sizePizza, setSizePizza] = React.useState(0);
  const [typePizza, setTypePizza] = React.useState(0);

  const addPizza = () => {
    const obj = {
      id,
      name,
      img,
      price,
      type: typeName[typePizza],
      size: size[sizePizza],
    };

    dispatch(addProduct(obj));
  };

  return (
    <div className="pizza-block">
      <Link to={`pizzas/${id}`}>
        <img className="pizza-block__image" src={img} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => {
            return (
              <li
                key={index}
                onClick={() => setTypePizza(index)}
                className={typePizza === index ? 'active' : ''}>
                {typeName[type]}
              </li>
            );
          })}
        </ul>
        <ul>
          {size.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setSizePizza(index)}
                className={sizePizza === index ? 'active' : ''}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div onClick={addPizza} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
