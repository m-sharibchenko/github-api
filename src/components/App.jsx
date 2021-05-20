import React, { useState} from 'react'
import { Header } from './Header'
import 'normalize.css'
import { StartPage } from './StartPg'
import { UserNotFound } from './UserNotFound'
import { UserExist } from './UserExist'

export function App () {
  const [ data, setData ] = useState({ login: ''})

  const getUserData = (value) => {
    console.log(value)
    setData(value)
  }

  return (
    <div className="App">
      <Header getUserData={getUserData}/>

      {data.login === '' && <StartPage />}

      {data.login !== '' && data.login !== 'not found' && <UserExist userData={data}/>}

      {data.login === 'not found' && <UserNotFound />}
    </div>
  )
}

