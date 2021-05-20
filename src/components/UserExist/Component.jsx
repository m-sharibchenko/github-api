import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { UserPhoto } from './components/UserPhoto'
import { UserInfo } from './components/UserInfo'
import { UserRepos } from './components/UserRepos'
import { NoRepos } from './components/NoRepos'

export function UserExist (props) {
  const { userData } = props

  return (
    <div className="content__exist-user">
      <div className="content__user-profile">
        <UserPhoto photoUrl={userData.avatar_url}/>
        <UserInfo info={userData}/>
      </div>

      <div className="content__user-repos">
        {userData.public_repos > 0 ?
          <UserRepos repos={userData.repos}
                     reposCount={userData.public_repos}
          />
          : <NoRepos />
        }
      </div>
    </div>
  )
}

UserExist.propTypes = {
  userData: PropTypes.shape({
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      followers: PropTypes.number,
      following: PropTypes.number,
      html_url: PropTypes.string,
      login: PropTypes.string,
      name: PropTypes.string,
      public_repos: PropTypes.number,
    }),
    repos: PropTypes.arrayOf(PropTypes.shape({
      html_url: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
    }))
  })
}