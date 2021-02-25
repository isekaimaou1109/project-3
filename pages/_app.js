import '../styles/global.scss'

import Router from 'next/router'
import { useState, useEffect, createContext } from 'react'
import { trigger, mutate } from 'swr'
import cookie from 'js-cookie'

export const AppContext = createContext()

export default function App({ Component, pageProps }) {
  // const [user, setUser] = useState()
//   const [token, setToken] = useState()

//   let userId = localStorage.getItem("userID") || uuidv4() 
//   const privateKey = readFileSync(`${process.cwd()}\\private.key`);
//   const token = sign({ userID: userId }, privateKey, { algorithm: 'RS256' });

//   const login = function({ user, token }) {

//     cookie.set('token', token, { expires: 14 })

//     setUser(user)
//     setToken(token)
//     trigger(`/api/users/${user.id}`)
//  }

//   const logout = function() {

//   }

  return (
    <AppContext.Provider 
      // value={{
      //   user: user,
      //   token: cookieToken || token,
      //   login: login,
      //   logout: logout,
      //   setUser: setUser,
      // }}
      value={""}
    >
      <Component  {...pageProps} />
    </AppContext.Provider>
  )
} 


// export async function getServerSideProps(context) {
  // let userId = localStorage.getItem("userID") || uuidv4() 
  // const privateKey = readFileSync(`${process.cwd()}\\private.key`);
  // const token = sign({ userID: userId }, privateKey, { algorithm: 'RS256' });
  
  

//   return {
//     props: {
//       userID: token
//     }, 
//   }
// }