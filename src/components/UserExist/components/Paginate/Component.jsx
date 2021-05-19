import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import './style.css'
import { getReposItems } from './utils/getReposItems'
import { showReposOnPg } from './utils/showReposOnPg'
import { findPageCount } from './utils/findPageCount'

export function Pagination (props) {
  const { reposCount, initialPage } = props

  const [ activePage, setActivePage ] = useState(1)

  useEffect(() => {
    setActivePage(1)
  }, [reposCount])

  const onPageChange = (evt) => {
    const { showRepos } = props

    setActivePage(evt.selected + 1)
    showRepos(getReposItems(reposCount, evt.selected + 1))
  }

  return (
    <footer className="pagination-wrap">
      <span className="pagination-info">{showReposOnPg(getReposItems(reposCount, activePage), reposCount)}</span>
      <ReactPaginate
        pageCount={findPageCount(reposCount)}
        forcePage={initialPage}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={onPageChange}
        previousLabel={<img src='./icons/prev.svg' alt="Previous" />}
        nextLabel={<img src='./icons/next.svg' alt="Next" />}
        breakLabel={'...'}
        containerClassName="pagination-list"
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