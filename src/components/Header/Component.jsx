import React from 'react'
import './style.css'
import { Search } from '../Search'

export function Header () {
  return (
    <header className="app-header">
      <img
        src="./icons/gh-logo.svg"
        alt="GitHub"
        className="app-header__logo"
      />

      <Search/>
    </header>
  )
}