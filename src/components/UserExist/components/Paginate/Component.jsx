import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import './style.css'
import { getReposItems } from './utils/getReposItems'
import { showReposOnPg } from './utils/showReposOnPg'
import { findPageCount } from './utils/findPageCount'
import { firstPage } from './utils/constants'

export function Pagination (props) {
  const { reposCount, initialPage } = props

  const [ activePage, setActivePage ] = useState(firstPage)

  useEffect(() => {
    setActivePage(firstPage)
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
        previousLabel={activePage !== firstPage
          ? <img src='./icons/prev-active.svg' alt="Previous" />
          : <img src='./icons/prev.svg' alt="Previous" />}
        nextLabel={activePage !== findPageCount(reposCount)
          ? <img src='./icons/next-active.svg' alt="Previous" />
          : <img src='./icons/next.svg' alt="Next" />}
        breakLabel={'...'}
        containerClassName="pagination-list"
        pageClassName="pagination-page"
        breakClassName="pagination-break"
        previousClassName={activePage !== firstPage
          ? "pagination-previous"
          : "pagination-previous none-active"}
        nextClassName={activePage !== findPageCount(reposCount)
          ? "pagination-next"
          : "pagination-next none-active"}
        activeClassName="pagination-active-page"
        pageLinkClassName="pagination-link"
        previousLinkClassName="pagination-link"
        nextLinkClassName="pagination-link"
      />
    </footer>
  )
}