import React from 'react';

type searchProps = { searchValue: string; changeInput: any };

const Search: React.FC<searchProps> = ({ searchValue, changeInput }) => {
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
