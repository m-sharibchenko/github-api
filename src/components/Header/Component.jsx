import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Search } from './components/Search'

export function Header (props) {
  const searchUser = (value) => {
    const { getUserData } = props
    getUserData(value)
  }

  const showSpin = (bool) => {
    const { showSpin } = props
    showSpin(bool)
  }

  return (
    <header className="app-header">
      <img
        src="./icons/gh-logo.svg"
        alt="GitHub"
        className="app-header__logo"
      />

      <Search searchUser={searchUser} showSpin={showSpin}/>
    </header>
  )
}

Header.propTypes = {
  getUserData: PropTypes.func,
}