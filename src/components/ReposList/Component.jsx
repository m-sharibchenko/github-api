import React from 'react'
import './style.css'
import { ReposItem } from '../ReposItem'

export function ReposList () {
  return (
    <ul className="repos-list">
      <p className="repos-list__title">Repositories</p>

      {<ReposItem />}
    </ul>
  )
}