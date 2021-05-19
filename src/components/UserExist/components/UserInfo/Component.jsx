import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { formatNumber } from './utils/formatNumber'

export function UserInfo (props) {
  const { name, login, followers, following, html_url } = props.info

  return (
    <div className="content__user-info">
      <p className="content__user-name">{name ? name : 'no name'}</p>

      <p className="content__user-login">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {login}
        </a>
      </p>

      <div className="content__following-wrap">
        <div className="content__followers">
          <img
            src="./icons/followers.svg"
            alt="followers"
            className="following-wrap__img"
          />
          {formatNumber(followers)} followers
        </div>

        <div className="content__following">
          <img
            src="./icons/person.svg"
            alt="following"
            className="following-wrap__img"
          />
          {formatNumber(following)} following
        </div>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  html_url: PropTypes.string,
  login: PropTypes.string,
  name: PropTypes.string,
}