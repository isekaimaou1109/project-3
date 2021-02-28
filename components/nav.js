import Image from "next/image"
import styles from '../styles/index.module.scss'
import { useRouter } from 'next/router'
import { AppContext } from '../pages/_app.js'
import { useContext } from 'react'

export default function Nav(props) {
  const router = useRouter()
  const context = useContext(AppContext)

  return (
    <>
      <nav id={styles.nav}>
        <div id={styles.left}>
          <Image onClick={() => router.replace("/")} src="/images/mega_icon.jpg" width="42px" height="42px" style={{ alignSelf: "center" }} alt="mega_icon" />
          <div className={styles["mega-btn"]} onClick={() => router.replace("/registerb")}>MEGA for Business</div>
        </div>
        <div id={styles.right}>
          <h4 id={styles.changelang}>
            <i style={{ fontSize:"18px" }} className="fas fa-globe"></i>{" "}
            <span>EN</span>
          </h4>
          <div id={styles["btn-wrap"]}>
            {router.pathname === "/register" || <div onClick={() => router.push("/register")} className={`${styles["mega-btn"]} ${styles["mega-signup-btn"]}`}>Create Account</div>}
            {(router.pathname === "/login" || context.username.username !== "anonymous") ? <></> : <div onClick={(e) => router.push("/login")} className={`${styles["mega-btn"]}  ${styles["mega-login-btn"]}`}>Login</div>}
          </div>
          <div id={styles.sidebar}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  )
}

