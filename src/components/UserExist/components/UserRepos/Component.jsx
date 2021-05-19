import React, { useState, useEffect } from 'react'
import { ReposList } from '../ReposList/Component'
import { Pagination } from '../Paginate'
import { filterRepos } from './utils/filterRepos'

export function UserRepos (props) {
  const { repos, reposCount } = props

  const [ reposOnPg, setReposOnPg ] = useState({from: 1, to: 4})

  useEffect(() => {
    setReposOnPg({from: 1, to: 4})
  }, [repos])

  const showRepos = (value) => {
    setReposOnPg(value)
  }

  return (
    <>
        <ReposList repos={filterRepos(reposOnPg, repos)}/>
        <Pagination reposCount={reposCount} showRepos={showRepos}/>
    </>
  )
}