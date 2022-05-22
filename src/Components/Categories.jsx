import React from 'react';

const Categories = ({ activeCategoria, setActiveCategoria }) => {
  const categories = [
    { name: 'Все', categorId: 0 },
    { name: 'Мясные', categorId: 1 },
    { name: 'Вегетарианская', categorId: 2 },
    { name: 'Гриль', categorId: 3 },
    { name: 'Острые', categorId: 4 },
    { name: 'Закрытые', categorId: 5 },
  ];

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
              onClick={() => changeActiveCategory(categor)}
              className={activeCategoria.categorId === categor.categorId ? 'active' : ''}>
              {categor.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
