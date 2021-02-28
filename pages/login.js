import styles from '../styles/login.module.scss'
import Footer from '../components/footer.js'
import Nav from '../components/nav.js'
import Container from '../components/layout.js'
import { AppContext } from './_app.js'

import { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from "uuid"
import { useRouter } from 'next/router'

export default function Login({ isValidCookie, cookie }) {
  const context = useContext(AppContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isRemembered, setIsRemembered] = useState(false)
  const router = useRouter()


  const onSubmit = function() {
    fetch(`http://localhost:3000/api/${Cookies.get("token", { path: "/" })}`)
    .then((data) => data.json())
    .then(client => {
      client.forEach(d => {
        if(d.firstname == username && d.password == password) {
          context.onSetUser({ username: d.firstname, password: d.password, email: d.email })
          Cookies.remove("token", { path: "/" })
          Cookies.set("token", d.tokenId, { path: "/" })
          router.push(`/dashboard/${d.firstname}`)
        }
      })
    })
  }

  return (
    <>
      {
        context.username.username !== "anonymous" ? (<p>You should logout first {context.username.username}</p>) : (
          <Container title="Login Page">
            <Nav />
              <div className={styles["login-container"]}>
                <div className={styles["login"]}>
                  <p className={styles["header"]}>Login</p>
                  <div className={styles["info"]}><span className={styles["fillin"]}>
                    <input name="username" placeholder="Your Username" className={styles["input"]} value={username} onChange={(e) => setUsername(e.target.value)} />
                    {/* <span className={styles["label"]}>Your Username</span> */}
                  </span><br /><br />
                  <span className={styles["fillin"]}>
                    <input placeholder="Your Password" name="password" className={styles["input"]} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  {/* <span className={styles["label"]}>Your Password</span> */}
                  </span>
                  </div>
                  <div className={styles["forgot"]}>
                    <span><i className="fas fa-lock"></i>&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Forgot your password?</span>
                  </div>
                  <div className={styles["extra-info"]}>
                    <div id={styles["left"]}>
                      <input id={styles["save"]} value={isRemembered} type="checkbox" name="isRemembered" onChange={(e) => setIsRemembered(!isRemembered)} />
                      <label htmlFor="save">Remember me</label>
                    </div>
                  <div id={styles["right"]}>
                    <button id={styles["login_btn"]} onClick={onSubmit}>Log in 
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                  <p className={styles["login_footer"]}>Don&apos;t have an account?
                    <a href="#" style={{ color:"#fff", textDecoration:"underline", fontWeight:"bold" }}>
                      <span style={{ marginLeft:"5px" }}>Create one now</span>
                    </a>
                  </p>
                </div>
                <div className={styles["illusion"]}>
                  <div className={styles["img"]}></div>
                  <strong>Backup your Recovery Key</strong>
                  <span>Don&apos;t risk getting locked out.</span>
                  <p style={{ color:"red", fontSize:"13px", textDecoration:"underline" }}>Read more about MEGA&apos;s end-to-end encryption</p>
                </div>
              </div>
            <Footer />
          </Container>
        )
      }
    </>
  )
}
