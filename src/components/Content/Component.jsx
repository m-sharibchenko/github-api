import React from 'react'
import './style.css'
import { UserPhoto } from '../UserPhoto'
import { UserInfo } from '../UserInfo'
import { ReposList } from '../ReposList/Component'
import { Pagination } from '../Paginate'

export function Content () {
  return (
    <div className="content__exist-user">
      <div className="content__user-profile">
        <UserPhoto />
        <UserInfo />
      </div>

      <div className="content__user-repos">
        <ReposList />
        <Pagination />
      </div>
    </div>
  )
}