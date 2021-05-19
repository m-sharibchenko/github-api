import React, { useState} from 'react'
import { Header } from './Header'
import 'normalize.css'
import { StartPage } from './StartPg'
import { UserNotFound } from './UserNotFound'
import { UserExist } from './UserExist'

export function App () {
  const [ data, setData ] = useState({user: '', repos: []})

  const getUserData = (value) => {
    console.log(value)
    setData(value)
  }

  return (
    <div className="App">
      <Header getUserData={getUserData}/>

      {data.user === '' && <StartPage />}

      {typeof data.user === 'object' && <UserExist userData={data}/>}

      {data.user === 'not found' && <UserNotFound />}

      {data.user === 'error' && <div>Error</div>}
    </div>
  )
}

