import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import './style.css'

export function UserInfo (props) {
  const { name, login, followers, following, html_url, url } = props.data

  return (
    <div className="content__user-info">
      <p className="content__user-name">{name ? name : 'no name'}</p>

      <p className="content__user-login">{login}</p>

      <div className="content__following-wrap">
        <div className="content__followers">
          <img
            src="./icons/followers.svg"
            alt="followers"
          />
          {followers} followers
        </div>

        <div className="content__following">
          <img
            src="./icons/person.svg"
            alt="following"
          />
          {following} following
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
  url: PropTypes.string,
}