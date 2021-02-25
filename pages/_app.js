import '../styles/global.scss'

import { useState, useEffect, createContext } from 'react'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from "uuid"

export const AppContext = createContext()

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ token: Cookies.get("token") || "", username: "" })

  useEffect(() => {
    if(!user.token) {
      setUser({ token: Cookies.set("token", uuidv4()) })
    }
  })


//   let userId = localStorage.getItem("userID") || uuidv4() 
//   const privateKey = readFileSync(`${process.cwd()}\\private.key`);
//   const token = sign({ userID: userId }, privateKey, { algorithm: 'RS256' });

  const logout = function(change) {
    Cookies.remove("token")
    change({ token: uuidv4(), username: "anonymous" })
  }

  return (
    <AppContext.Provider 
      value={{
        onLogin: setUser,
        onLogout: logout,
        userInfo: user
      }}
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