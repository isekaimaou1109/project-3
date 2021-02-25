// import styles from '../styles/login.module.scss'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <div id={styles["footer"]}>
      <div className={styles["col"]} id={styles["col-1"]}>
        <div id={styles["wrap-col-1"]}>
          <a className="branch" href="#"><img src="https://i.ibb.co/4YzyNjg/mega.jpg" /></a>
          <h2 className={styles["item-1"]} style={{ margin:0 }}>The Privacy Company.</h2>
          <span className={styles["item"]}>User-encrypted cloud services</span>
          <span className={styles["item"]}>&copy; MEGA 2021 All rights reserved</span>
          <span className={styles["item"]} aria-label="MEGA">Follow MEGA</span>
          <span className={styles["icon"]}>
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-instagram-square"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube-square"></i></a>
          </span>
        </div>
      </div>

      <div className={styles["col"]} id={styles["col-2"]}>
        <h2 className={styles["title"]}>PLATFORMS</h2>
        <a href="#"><span className={styles["item"]}>MEGA Desktop App</span></a>
        <a href="#"><span className={styles["item"]}>MEGA Mobile Apps</span></a>
        <a href="#"><span className={styles["item"]}>Browser Extensions</span></a>
        <a href="#"><span className={styles["item"]}>MEGA CMD</span></a>
        <a href="#"><span className={styles["item"]}>MEGA on NAS</span></a>
        <h2 className={styles["title"]}>FEATURES</h2>
        <a href="#"><span className={styles["item"]}>The MEGA Cloud</span></a>
        <a href="#"><span className={styles["item"]}>Security</span></a>
        <a href="#"><span className={styles["item"]}>Collaboration</span></a>
        <a href="#"><span className={styles["item"]}>Secure Chat</span></a>
      </div>
      
      <div className={styles["col"]} id={styles["col-3"]}>
        <h2 className={styles["title"]}>COMPANY</h2>
        <a href="#"><span className={styles["item"]}>About Us</span></a>
        <a href="#"><span className={styles["item"]}>Pricing</span></a>
        <a href="#"><span className={styles["item"]}>Referral Program</span></a>
        <a href="#"><span className={styles["item"]}>Blog</span></a>
        <a href="#"><span className={styles["item"]}>Jobs</span></a>
        <a href="#"><span className={styles["item"]}>Press &amp; Media</span></a>
        <a href="#"><span className={styles["item"]}>Credits</span></a>
        <a href="#"><span className={styles["item"]}>Reliability</span></a>
      </div>
      <div className={styles["col"]} id={styles["col-4"]}>
        <h2 className={styles["title"]}>SUPPORT</h2>
        <a href="#"><span className={styles["item"]}>Help Centre</span></a>
        <a href="#"><span className={styles["item"]}>Contact Us</span></a>
        <a href="#"><span className={styles["item"]}>Get Support</span></a>
        <h2 className={styles["title"]}>DEVELOPERS</h2>
        <a href="#"><span className={styles["item"]}>SDK</span></a>
        <a href="#"><span className={styles["item"]}>Source Code</span></a>
        <a href="#"><span className={styles["item"]}>Documentation</span></a>
      </div>
      <div className={styles["col"]} id={styles["col-5"]}>
        <h2 className={styles["title"]}>LEGAL</h2>
        <a href="#"><span className={styles["item"]}>Terms of Service</span></a>
        <a href="#"><span className={styles["item"]}>Privacy Policy</span></a>
        <a href="#"><span className={styles["item"]}>Copyright</span></a>
        <a href="#"><span className={styles["item"]}>Takedown Guidance</span></a>
        <a href="#"><span className={styles["item"]}>Transparency Report</span></a>
        <a href="#"><span className={styles["item"]}>General Data Protection Regulation Disclosure</span></a>
        <a href="#"><span className={styles["item"]}>Cookie Policy</span></a>
        <a href="#"><span className={styles["item"]}>Cookie Settings</span></a>
      </div>
    </div>
  )
}

