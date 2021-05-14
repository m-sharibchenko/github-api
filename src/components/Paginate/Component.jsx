import React from 'react'
import ReactPaginate from 'react-paginate'
import './style.css'

export function Pagination () {
  return (
    <footer className="pagination-wrap">
      <span className="pagination-info">number of repos is shown now</span>
      <ReactPaginate
        containerClassName="pagination-list"
        pageCount={20}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={<img src='./icons/prev.svg' alt="Previous" />}
        nextLabel={<img src='./icons/next.svg' alt="Next" />}
        breakLabel={'...'}
        pageClassName="pagination-page"
        breakClassName="pagination-break"
        previousClassName="pagination-previous"
        nextClassName="pagination-next"
        activeClassName="pagination-active-page"
        pageLinkClassName="pagination-link"
        previousLinkClassName="pagination-link"
        nextLinkClassName="pagination-link"
      />
    </footer>
  )
}