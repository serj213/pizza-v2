import React from 'react';

const Categories = ({ activeCategoria, setActiveCategoria }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const changeActiveCategory = (index) => {
    setActiveCategoria(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categor, index) => {
          return (
            <li
              key={index}
              onClick={() => changeActiveCategory(index)}
              className={activeCategoria === index ? 'active' : ''}>
              {categor}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
