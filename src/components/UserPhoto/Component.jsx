import React from 'react'
import './style.css'

export function UserPhoto () {
  return (
    <div className="content__user-photo-wrap">
      <img
        src="https://avatars.githubusercontent.com/u/810438?v=4"
        alt="User"
        className="content__user-photo"
      />
    </div>
  )
}