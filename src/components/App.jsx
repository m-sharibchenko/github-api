import React from 'react'
import { Header } from './Header'
import 'normalize.css'
import { StartPage } from './StartPg'
// import { UserNotFound } from './UserNotFound'
// import { UserExist } from './UserExist'

export function App() {
  return (
    <div className="App">
      <Header />
      {/*start page*/}
      <StartPage />

      {/*if user was found*/}
      {/*<UserExist />*/}


      {/*if user not exist*/}
      {/*<UserNotFound />*/}
    </div>
  );
}

