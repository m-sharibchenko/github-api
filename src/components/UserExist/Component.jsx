import React from 'react'
import './style.css'
import { UserPhoto } from '../UserPhoto'
import { UserInfo } from '../UserInfo'
// import { ReposList } from '../ReposList/Component'
// import { Pagination } from '../Paginate'
import { NoRepos } from '../NoRepos'

export function UserExist () {
  return (
    <div className="content__exist-user">
      <div className="content__user-profile">
        <UserPhoto />
        <UserInfo />
      </div>

      <div className="content__user-repos">
          {/*if user has repos */}
          {/*<ReposList />*/}
          {/*<Pagination />*/}
      {/*  if user has no repos*/}
      <NoRepos />

      </div>
    </div>
  )
}