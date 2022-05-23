import React from 'react';

const Search = ({ searchValue, changeInput }) => {
  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => changeInput(e.target.value)}
        placeholder="Поиск по сайту"
        className="header__search"
      />
    </>
  );
};

export default Search;
