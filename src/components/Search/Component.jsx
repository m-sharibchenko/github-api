import React from 'react'
import './style.css'

export function Search () {
  return (
    <div className="app-header__search">
      <img
        src="./icons/search.svg"
        alt="search"
        className="search-icon"
      />

      <input
        type="search"
        placeholder="Enter GitHub username"
        className="app-header__input-search"
      />
    </div>
  )
}