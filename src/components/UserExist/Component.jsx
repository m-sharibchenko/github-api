import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { UserPhoto } from '../UserPhoto'
import { UserInfo } from '../UserInfo'
import { UserRepos } from '../UserRepos'
import { NoRepos } from '../NoRepos'

export function UserExist (props) {
  const { data } = props

  return (
    <div className="content__exist-user">
      <div className="content__user-profile">
        <UserPhoto photoUrl={data.avatar_url}/>
        <UserInfo data={data}/>
      </div>

      <div className="content__user-repos">
        {data.public_repos > 0 ?
          <UserRepos data={data}/>
          : <NoRepos />
        }
      </div>
    </div>
  )
}

UserExist.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    public_repos: PropTypes.number,
    url: PropTypes.string,
  })
}