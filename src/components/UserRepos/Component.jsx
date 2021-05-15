import React from 'react'
import { ReposList } from '../ReposList/Component'
import { Pagination } from '../Paginate'

export function UserRepos () {
  return (
    <>
        <ReposList />
        <Pagination />
    </>
  )
}