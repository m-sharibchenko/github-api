import React from 'react'
import './style.css'

export function StartPage () {
  return (
    <div className="content__start-page">
      <img
        src="./icons/search.svg"
        alt="Search"
        className="start-page-icon"
      />

      <p className="start-page-title">Start with searching a GitHub user</p>
    </div>
  )
}