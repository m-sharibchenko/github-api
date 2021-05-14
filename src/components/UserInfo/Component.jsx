import React from 'react'
import './style.css'

export function UserInfo () {
  return (
    <div className="content__user-info">
      <p className="content__user-name">Dan Abramov</p>

      <p className="content__user-login">username</p>

      <div className="content__following-wrap">
        <div className="content__followers">
          <img
            src="./icons/followers.svg"
            alt="followers"
          />
          followers
        </div>

        <div className="content__following">
          <img
            src="./icons/person.svg"
            alt="following"
          />
          following
        </div>
      </div>
    </div>
  )
}