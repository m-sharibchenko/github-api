import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { getUserData } from './ulits/getUserData'
import { getUserRepos } from './ulits/getUserRepos'

export function Search (props) {
  const [ input, setInput ] = useState('')

  const onChangeInput = (evt) => {
    setInput(evt.target.value)
  }

  const onSearch = async (evt) => {
    const { searchUser } = props

    if (evt.code === 'Enter') {
      const data = await Promise.all([getUserData(input), getUserRepos(input)])
      const result = { ...data[0], ...data[1] }
      searchUser(result)

      setInput('')
    }
  }

  return (
    <div className="app-header__search">
      <img
        src="./icons/search.svg"
        alt="search"
        className="search-icon"
      />

      <input
        type="search"
        value={input}
        onChange={onChangeInput}
        onKeyUp={onSearch}
        placeholder="Enter GitHub username"
        className="app-header__input-search"
      />
    </div>
  )
}

Search.propTypes = {
  searchUser: PropTypes.func,
}




// arr = [{a: 4}, {b: 8}] => {a:4, b:8}
// obj = {...arr[0], ...arr[1]}