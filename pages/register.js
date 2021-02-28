import styles from '../styles/login.module.scss'
import Footer from '../components/footer.js'
import Nav from '../components/nav.js'
import Container from '../components/layout.js'
import signup from '../styles/signup.module.scss'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function Login(props) {
  const router = useRouter()

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [retypepassword, setConfirmPassword] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [agree, setAgree] = useState(false)

  const Content = useCallback(() => {
    const reg = new RegExp("((\w+|\d+)[.]*)*\b\@gmail\.com\b", "gm")
    const isFirstNameOk = firstname.length > 0 ? true : false
    const isLastNameOk = lastname.length > 0 ? true : false
    const isEmailOk = reg.test(email) ? true : false
    const isPasswordOk = checkStrongPassword(password) && password === retypepassword ? true : false
    const isRePasswordOk = retypepassword.length > 0 && password === retypepassword ? true : false
    const isPrivacyTicked = privacy
    const isAgreeTick = agree

    return (
      <button type="submit" id={signup["btn-register"]} disabled={isFirstNameOk + isLastNameOk + isEmailOk + isPasswordOk + isRePasswordOk + isPrivacyTicked + isAgreeTick === 6 ? false : true}>
        Register
      </button>
    )
  }, [
    firstname, lastname, email, agree,
    password, retypepassword, privacy
  ])

  const checkStrongPassword = (password) => {
    setPassword(password)
    let isStrong = password.length < 7 ? false : true
    let isAtLeastOneUpperCharacter = new RegExp("[A-Z]", "gm")
    let isAtLeastOneSpecialCharacter = new RegExp("[!@#$%^&*()]+", "gm")
    let isCompare = isAtLeastOneUpperCharacter.test(password)
    let isCompareTwo = isAtLeastOneSpecialCharacter.test(password)
    let result = isStrong + isCompare + isCompareTwo

    if(result === 3) {
      return true 
    } else {
      return false
    }
  }

  return (
    <Container title="Register Page">
      <Nav />
        <form action={`http://localhost:3000/api/post/${Cookies.get('token')}`} method="POST">
          <div className={styles["login-container"]}>
            <div className={styles["login"]} style={{ width:"500px", gridTemplateRows:"100px auto 50px", height:"100%" }}>
              <p className={styles["header"]}>Create your <span style={{ color:"red" }}>free</span> account</p>
              
              <div className={signup["signup-form"]}>
                <input name="firstname" className={signup["signup-info"]} type="text" placeholder="First name" value={firstname} onChange={(e) =>setFirstName(e.target.value)} />
                <input name="lastname" className={signup["signup-info"]} type="text" placeholder="Last name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                <input name="email" className={signup["signup-info"]} type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input name="password" className={signup["signup-info"]} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input name="retypepassword" className={signup["signup-info"]} type="password" placeholder="RETYPE-Password" value={retypepassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                
                <div style={{ fontSize:"13px",lineHeight:2,width:"calc(100% / 1.2)",paddingTop:"10px" }}>
                  <input name="privacy" type="checkbox" value={privacy} onChange={() => setPrivacy(!privacy)}  />
                  {/* onChange={(e) => setForm({ privacyTick: e.target.value })} */}
                  <label>I understand that if I lose my password, I may lose my data. Read more about <Link href="#">MEGA’s end-to-end encryption.</Link></label>
                </div>
                <div style={{ fontSize:"13px",lineHeight:2,width:"calc(100% / 1.2)",paddingTop:"10px" }}>
                  <input name="agree" type="checkbox" value={agree} onChange={() => setAgree(!agree)} />
                  {/* onChange={(e) => setForm({ argreepolicyTick: e.target.value })} */}
                  <label>I agree with the MEGA <Link href="#">Terms of Service</Link></label>
                </div>
                <Content />
              </div>

              <p className={styles["login_footer"]} style={{ height:"100%" }}>Don&apos;t have an account?
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
        </form>
      <Footer />
      <script src="/javascripts/navbar-trackdown.js"></script>
    </Container>
  )
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}