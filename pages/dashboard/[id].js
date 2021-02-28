import { useRouter } from 'next/router'
import Image from "next/image"
import { useContext } from 'react'

import { AppContext } from '../_app.js'
import styles from "../../styles/dashboard.module.scss"
import Header from "../../components/header.js"

export default function Dashboard() {
  const router = useRouter()
  const context = useContext(AppContext)

  return (
    <>
      {context.username.username ? (
        <>
          <Header title={`Trang cá nhân của ${context.username.username}`} />
          <div id={styles["dashboard-container"]}>
            
            <div id={styles["static-sidebar"]}>
              <div id={styles.top}>
                <div className={styles.item}>
                  <i className="fab fa-font-awesome"></i>
                </div>
                <div className={styles.item}>
                  <i className="fas fa-cloud"></i>
                </div>
                <div className={styles.item}>
                  <i className="far fa-clock"></i>
                </div>
                <div className={styles.item}>
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <div className={styles.item}>
                  <i className="far fa-comment-dots"></i>
                </div>
              </div>
              <div id={styles.bottom}>
                <div className={styles.item}>
                  <i className="fas fa-trash"></i>
                </div>
                <div className={styles.item}>
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className={styles.item}>
                  <i className="fas fa-cog"></i>
                </div>
                <div className={styles.item}>
                  <i className="fas fa-bell"></i>
                </div>
              </div>
            </div>

            <div id={styles["directories"]}>
              <div id={styles["directories-title"]}>
                Cloud Drive
              </div>
              <div id={styles["directories-content"]}>
                <div id={styles["cover"]}>
                  <span>My folders</span>
                  <i className="fas fa-sort-amount-down"></i>
                </div>
                <div id={styles.folders}>
                  <i style={{ fontSize:"24px", color:"#ffd880" }} className="fas fa-folder"></i>
                  <span style={{ fontSize:"13px", alignSelf: "center", marginLeft:"10px" }} className={styles["name"]}>Mega</span>
                </div>
              </div>
            </div>

            <div id={styles["content"]}>
              <div id={styles["navbar"]}>
                <i className="far fa-eye"></i>
                <i className="fas fa-rocket"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-bars"></i>
              </div>

              <div id={styles["navbar-func"]}>
                <div className={styles["fnc-item"]}>
                  <i className="fas fa-folder-plus"></i>
                  <span>New Folder</span>
                </div>

                <div className={styles["fnc-item"]}>
                  <i className="fas fa-file-upload"></i>
                  <span>File Upload</span>
                </div>

                <div className={styles["fnc-item"]}>
                  <i className="fas fa-folder-open"></i>
                  <span>Folder Upload</span>
                </div>

                <div className={styles["fnc-item"]}>
                  <i className="fas fa-bars"></i>
                  <i className="fas fa-minus-square"></i>
                </div>
              </div>

              <div id={styles["drag-zone"]}>
                <ul id={styles["filelist"]}>

                </ul>
              </div>

              <script src="/javascripts/drag-and-drop.js"></script>
            </div>
          </div>
        </>
      ) :
        (<p>Must login first {context.username.username}</p>)
      }
    </>
  )
}
