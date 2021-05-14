import React from 'react'
import './style.css'

export function UserNotFound () {
  return (
    <div className="content__user-not-found">
      <img
        src="./icons/not-found.svg"
        alt="No user"
        className="user-not-found-icon"
      />

      <p className="user-not-found-title">User not found</p>
    </div>
  )
}