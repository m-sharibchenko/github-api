import React, { useState } from 'react'
import { Header } from './Header'
import 'normalize.css'
import { StartPage } from './StartPg'
import { UserNotFound } from './UserNotFound'
import { UserExist } from './UserExist'

export function App () {
  const [ data, setData ] = useState('')

  const getState = (value) => {
    console.log(value)
    setData(value)
  }

  return (
    <div className="App">
      <Header getState={getState} />

      {data === '' && <StartPage />}

      {typeof data === 'object' && <UserExist data={data}/>}

      {data === 'not found' && <UserNotFound />}

      {data === 'error' && <div>Error</div>}
    </div>
  )
}

