import React from 'react'
import './style.css'

export function NoRepos () {
  return (
    <div className="user__no-repos-wrap">
      <img
        src="./icons/no-repos.svg"
        alt="Empty"
        className="user__no-repos-icon"
      />

      <p className="user__no-repos-title">Repository list is empty</p>
    </div>
  )
}