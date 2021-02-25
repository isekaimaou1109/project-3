import styles from '../styles/login.module.scss'
import Footer from '../components/footer.js'
import Nav from '../components/nav.js'
import Container from '../components/layout.js'

import { useState } from 'react'
 
export default function Login(props) {
  const [info, setInfo] = useState({ username: "", password: "" })

  const onChangeUsername = function($evt) {
    setInfo({ username: $evt.target.value })
  }

  const onChangePassword = function($evt) {
    setInfo({ password: $evt.target.value })
  }

  const onLogin = function() {}

  return (
    <Container title="Login Page">
      <Nav />
        <div className={styles["login-container"]}>
          <div className={styles["login"]}>
            <p className={styles["header"]}>Login</p>
            <div className={styles["info"]}><span className={styles["fillin"]}>
              <input className={styles["input"]} value={info.username} onChange={onChangeUsername} />
              <span className={styles["label"]}>Your Username</span>
            </span><br /><br />
            <span className={styles["fillin"]}>
              <input className={styles["input"]} type="password" value={info.username} onChange={onChangePassword} />
            <span className={styles["label"]}>Your Password</span>
            </span>
            </div>
            <div className={styles["forgot"]}>
              <span><i className="fas fa-lock"></i>&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Forgot your password?</span>
            </div>
            <div className={styles["extra-info"]}>
              <div id={styles["left"]}>
                <input id={styles["save"]} type="checkbox" name="save" />
                <label htmlFor="save">Remember me</label>
              </div>
              <div id={styles["right"]}>
                <button id={styles["login_btn"]} onClick={onLogin}>Log in 
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

export async function getServerSideProps() {
  
  return {
    props: {}
  }
}