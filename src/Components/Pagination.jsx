import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../redux/slices/filterSlice';

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();

  const changePage = (page) => {
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
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
