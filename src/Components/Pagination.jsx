import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ changePage }) => {
  return (
    <ReactPaginate
      className="pagination"
      nextLabel=">"
      onPageChange={(e) => changePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={10}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
