import '../styles/global.scss'

import { useState, useEffect, createContext } from 'react'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from "uuid"
// import { Sequelize, QueryTypes } from 'sequelize'

export const AppContext = createContext()

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ username: "anonymous", password: "", email: "" })

  Cookies.set("token", uuidv4(), { path: "/" })

  if(Cookies.get("token", { path: "/" })) {
    fetch(`http://localhost:3000/api/${Cookies.get("token", { path: "/" })}`, {
      method: "GET",
      credentials: "same-origin"
    }).then(client => client.json())
      .then(data => {
        data.forEach(item => {
          if(item.tokenId == Cookies.get("token",{path:"/"})) {
            setUser({ username: item.firstname, password: item.password, email: item.email })
          }
        })
      })
      .catch(e => console.error(e))
  }

  return (
    <AppContext.Provider 
      value={{
        username: user,
        onSetUser: setUser
      }}
    >
      <Component  {...pageProps} />
    </AppContext.Provider>
  )
} 