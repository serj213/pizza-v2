import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../redux/slices/filterSlice';

type paginationProps = {
  currentPage: number;
};

const Pagination: React.FC<paginationProps> = ({ currentPage }) => {
  const dispatch = useDispatch();

  const changePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ReactPaginate
      className="pagination"
      nextLabel=">"
      onPageChange={(e) => changePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={10}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
