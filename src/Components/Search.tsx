import React from 'react';

type searchProps = { searchValue: string; changeInput: (value: string) => void };

const Search: React.FC<searchProps> = ({ searchValue, changeInput }) => {
  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeInput(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => changeInputHandler(e)}
        placeholder="Поиск по сайту"
        className="header__search"
      />
    </>
  );
};

export default Search;
