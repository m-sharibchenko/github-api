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
    const { searchUser, showSpin } = props

    if (evt.code === 'Enter') {
      showSpin(true)

      const userData = await getUserData(input)
      let result

      if (userData.public_repos > 0) {
        const reposData = await getUserRepos(input, userData.public_repos)
        result = { ...userData, ...reposData }

      } else {
        result = userData
      }

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
