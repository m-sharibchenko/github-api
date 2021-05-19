import React from 'react'
import './style.css'
import { ReposItem } from '../ReposItem'

export function ReposList (props) {
  const { repos } = props

  return (
    <ul className="repos-list">
      <p className="repos-list__title">Repositories</p>

      {repos.map(repo => <ReposItem key={repo.id} data={repo}/>)}
    </ul>
  )
}