import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Search } from '../Search'

export function Header (props) {
  const searchUser = (value) => {
    const { getState } = props

    getState(value)
  }

  return (
    <header className="app-header">
      <img
        src="./icons/gh-logo.svg"
        alt="GitHub"
        className="app-header__logo"
      />

      <Search searchUser={searchUser}/>
    </header>
  )
}

Header.propTypes = {
  getState: PropTypes.func,
}