import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getData } from './ulits/getData'
import './style.css'

export function Search (props) {
  const [ input, setInput ] = useState('')

  const onChangeInput = (evt) => {
    setInput(evt.target.value)
  }

  const onSearch = async (evt) => {
    const { searchUser } = props

    if (evt.code === 'Enter') {
      try {
        const response = await fetch(`https://api.github.com/users/${input}`)

        if (response.status === 404) {
          searchUser('not found')
        } else {
          const data = await response.json()
          console.log(data)
          searchUser(getData(data))
        }

      } catch (error) {
        searchUser('error')
      }

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