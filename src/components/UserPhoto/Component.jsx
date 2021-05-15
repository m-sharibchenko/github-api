import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export function UserPhoto (props) {
  const { photoUrl } = props

  return (
    <div className="content__user-photo-wrap">
      <img
        src={photoUrl}
        alt="User"
        className="content__user-photo"
      />
    </div>
  )
}

UserPhoto.propTypes = {
  photoUrl: PropTypes.string,
}