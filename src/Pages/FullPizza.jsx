import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPizza = async () => {
      console.log('dfdfdfdf');
      try {
        const { data } = await axios.get(
          'https://-6287dd3f7864d2883e8e1808.mockapi.io/serj/pizzas/' + id,
        );

        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пицц');
        console.log('Error ', error);
        navigate('/');
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>...Загрузка</>;
  }

  return (
    <div className="container">
      <img src={pizza.img} alt="" />
      <h2>{pizza.name}</h2>
      <p>{pizza.price}</p>
    </div>
  );
};

export default FullPizza;
