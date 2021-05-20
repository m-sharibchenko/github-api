import React, { useState } from 'react'
import { Header } from './Header'
import 'normalize.css'
import { StartPage } from './StartPg'
import { UserNotFound } from './UserNotFound'
import { UserExist } from './UserExist'
import { Loading } from './Loading'

export function App () {
  const [ data, setData ] = useState({ login: ''})
  const [ isLoading, setIsLoading ] = useState(false)

  const getUserData = (value) => {
    console.log(value)
    setData(value)
    setIsLoading(false)
  }

  const showSpin = (bool) => {
    setIsLoading(bool)
  }

  return (
    <div className="App">
      <Header getUserData={getUserData} showSpin={showSpin}/>

      {isLoading && <Loading />}

      {!isLoading && data.login === '' && <StartPage />}

      {!isLoading && data.login !== '' && data.login !== 'not found' && <UserExist userData={data}/>}

      {!isLoading && data.login === 'not found' && <UserNotFound />}
    </div>
  )
}

