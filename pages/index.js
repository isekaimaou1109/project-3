import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'

import styles from '../styles/index.module.scss'
import Header from "../components/header.js"
import Nav from '../components/nav.js'
import Container from '../components/layout.js'

const items = [
  { 
    title: "Desktop Service", 
    content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
    isToggle: true
  },
  { 
    title: "Desktop Service", 
    content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
    isToggle: false
  },
  { 
    title: "Desktop Service", 
    content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
    isToggle: false
  },
  { 
    title: "Desktop Service", 
    content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
    isToggle: false
  },
  { 
    title: "Desktop Service", 
    content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
    isToggle: false
  }
]

const benefits = [
  {
    path: "/images/mega_icon_lock.jpg",
    title: "Privacy",
    content: "By properly applying end-to-end encryption, MEGA achieves actual privacy by design.",
    ableToLearn: true
  },
  {
    path: "/images/mega_icon_cloud.jpg",
    title: "Powerful",
    content: "MEGA is a cloud based service which can be used from all major devices and platforms from anywhere with Internet.",
    ableToLearn: false
  },
  {
    path: "/images/mega_icon_chatter.jpg",
    title: "Secure",
    content: "MEGA is carefully engineered to achieve the highest level of security for its users.",
    ableToLearn: true
  },
  {
    path: "/images/mega_icon_user.jpg",
    title: "Transparent",
    content: "MEGA’s client apps are Public Source. Its cryptographic architecture is specified in a comprehensive Security Whitepaper.",
    ableToLearn: true
  },
  {
    path: "/images/mega_icon_document.jpg",
    title: "Reliable",
    content: "MEGA owns and operates its redundant server infrastructure directly, ensuring that your data always remains available.",
    ableToLearn: true
  },
  {
    path: "/images/mega_icon_cert.jpg",
    title: "Generous",
    content: "MEGA is one of the most generous cloud services on the Internet, with easy ways to expand and extend your free storage.",
    ableToLearn: false
  },
]

const fn_items = [
  {
    path: "/images/chat_fn.png",
    title: "Chat securely",
    content: "Connect with your contacts on MEGA and stay in touch; securely exchange messages and have audio, video or group calls with MEGAchat."
  },
  {
    path: "/images/cloud_fn.png",
    title: "Backup",
    content: "Automatically backup photos and videos from your mobile device with Camera Uploads, and sync your computer data with MEGA’s Desktop App. MEGA automatically maintains historic versions of your files, allowing you to easily revert when needed."
  },
  {
    path: "/images/sync_fn.png",
    title: "Synchronize",
    content: "Easy automated synchronization between your computer and your MEGA Cloud."
  },
  {
    path: "/images/transfer_fn.png",
    title: "Share",
    content: "Export securely keyed links to your files and folders, or share folders directly with your contacts on MEGA."
  }
]

const evalutions = [
  {
    stars: 5,
    evalution: "MEGA is our hands-down winner for free cloud storage and backup. If this Kiwi company's 50GB of free storage isn't enough for your business needs, they offer four more tiers of service, with plans from 200GB to 8TB, all available for less than US$25 per month.",
    url_web: "https://www.inc.com/technology/mega-review-best-free-cloud-storage-backup-for-small-business.html",
  },
  {
    stars: 5,
    evalution: "Mega puts its security credentials front and centre. Unlike some of its rivals, this service provides encryption in every part of the process. Anything you send to the cloud is encrypted locally, on-route, and on the destination server.”",
    url_web: "https://www.techadvisor.co.uk/test-centre/internet/best-cloud-storage-2018-3614269/"
  },
  {
    stars: 5,
    evalution: "“S'enrichissant de nouvelles fonctionnalités au fil des mois, Mega est l'un des meilleurs choix possible lorsqu’on souhaite déposer un gros volume de données sur le Cloud. On apprécie aussi sa fonction de partage, la plus simple d'emploi qui soit”",
    url_web: "https://www.tomsguide.fr/2016/12/07/stockage-en-ligne-gratuit-quel-service-choisir/"
  },
  {
    stars: 5,
    evalution: "and a simple drag-and-drop interface, New Zealand based Mega is one of the cloud storage heavyweights. There's a handy mobile app to allow you to upload files and photos, as well as sync clients with desktop machines.",
    url_web: "https://www.techradar.com/news/the-best-cloud-storage"
  }
];

export default function Index() {
  const router = useRouter()

  return (
    <>
      <Container title="Trang chủ">
        <Nav />
        <script src="/javascripts/navbar-trackdown.js"></script>
        <div className={styles.homepage}>
          <p className="title-homepage" style={{ fontSize:'32px', width:"700px", lineHeight: 1.5 }}>
            Secure Cloud Storage and Communication. Privacy by Design.</p>
          <p className="desc">Create a MEGA account to get <strong>50 GB FREE*</strong> storage</p>
          <button className={styles.btn} onClick={() => router.push("/register")}><a>Create Account</a></button>
          <img src="/images/mega-cloud.jpg" style={{ width:"80vw", WebkitUserDrag: "none" }} />
          <h6 style={{ color: "#888" }}>*Subject to your participation in our achievements program.</h6>
        </div>
        <div className={styles.introduce}>
          <div className={styles.box}>
            <div className={styles.left}>
              <span>Reliable Storage and Fast Transfers</span>
              <span>We make secure cloud storage simple and convenient. Create a free MEGA account today.</span>
              <a href="#"><span>Get started</span></a>
            </div>
            <div className={styles.right}>
              <img src="/images/start_img2-v2@2x.png" width="100%" height="60%" style={{ padding:"20% 0px 20% 0px", WebkitUserDrag: "none" }} />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.right} style={{ width:"60%" }}>
              <img src="/images/mega-star.jpg" width="100%" height="60%" style={{ height:"90%", WebkitUserDrag:"none" }} />
            </div>
            <div className={styles.left}><span>End-to-End Encryption</span>
              <p>Your MEGA files and chats are encrypted with keys controlled by you.</p>
              <a href="#"><span>Learn more</span></a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.left}><span>Secure Communication</span>
              <p>You can exchange messages, share your files and have audio/video calls with MEGA&rsquo;s end-to-end encrypted chat.</p><a href="#"><span>Get started</span></a>
            </div>
            <div className={styles.right}><img src="/images/start_img2-v2@2x.png" width="100%" height="60%" style={{ height:"90%", WebkitUserDrag:"none" }} /></div>
          </div>
          <div className={styles.box} style={{ backgroundColor:"#f6f6f6!important" }}>
            <div className={styles.right}>
              <img src="/images/mega_diagram.png" width="100%" height="60%" style={{ padding:"20% 0px 20% 0px", WebkitUserDrag:"none" }} />
            </div>
            <div className={styles.left}><span>The Secure Solution for Your Business</span>
              <p>Take the security of your company&rsquo;s data and communication to the next level with MEGA&rsquo;s end-to-end encrypted business solution.</p><a href="#"><span>Learn more</span></a>
            </div>
          </div>
          <div className={styles.box} style={{ flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
            <p style={{ fontSize:"32px", textAlign:"center" }}>How does MEGA compare?</p>
            <div className={styles.wrap}>
              <img className={styles.item} src="/images/upload-3.png" style={{ WebkitUserDrag:"none" }} />
              <img className={styles.item} src="/images/upload-1.png" style={{ height: "100%", border:"1px solid #75cfb8", WebkitUserDrag:"none" }} />
              <img className={styles.item} src="/images/upload-2.png" style={{ WebkitUserDrag:"none" }} />
            </div>
            <span style={{ paddingTop:"50px" }}>Get MEGA Pro? <a href="#">Upgrade Account</a></span>
          </div>
          <div className={styles.box} style={{ flexDirection:"column", alignItems:"center" }}>
            <p style={{ fontSize:"32px" }}>Seamless Software for All Your Devices</p>
            <div className={styles["box-container"]} style={{ display:"flex", justifyContent:"center" }}>
              <div className={styles.img} style={{ width:"60%", alignSelf:"center" }}>
                <img src="/images/start-sl-img1.png" style={{ width:"100%", WebkitUserDrag:"none" }} />
              </div>
              <div className={styles.arcordion}>
                {items.map((item, index) => {
                  return (
                    <div className={styles.item} key={"container" + index}>
                      <div aria-label={"item-" + index} data-istoggle={item.isToggle} className={styles["wrap-title"]}>
                        <i className="fas fa-chevron-right"></i>
                        <span>{item.title}</span>
                      </div>
                      <div className={styles.expansion} aria-hidden={!item.isToggle}>
                        <span>{item.content}</span>
                        <h4>
                          <a href="#">Learn more </a><i className="fab fa-apple"></i>
                          <i className="fab fa-windows"></i>
                          <i className="fab fa-linux"></i>
                        </h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div data-unique={true} className={styles.box} style={{ flexDirection:"column", alignItems:"center", padding:"20px 80px 20px 80px" }}>
            <p style={{ fontSize:"36px", color:"#999" }}>Why Use MEGA?</p>
            <div className={styles.benefits}>
              {benefits.map((benefit, i) => {
                return (
                  <div className={styles["item-benefit"]} key={`benefit-${i}`}>
                    <Image src={benefit.path} width="64px" height="64px" />
                    <h3>{benefit.title}</h3>
                    <h5>{benefit.content}</h5>
                    {benefit.ableToLearn && <Link href="#">Learn more</Link>}
                  </div>
                )
              })}
            </div>  
          </div>
          <div className={styles.functions}>
            <h2 style={{ margin:"0px" }}>What can you do with MEGA?</h2>
            <div className={styles["wrap-function"]}>
              {fn_items.map((fn, i) => {
                return (
                  <div className={styles["item-function"]} key={"fn" + i}>
                    <Image src={fn.path} width="fit-content" height="169px" />
                    <div style={{ padding:"10px" }}>
                      <h3>{fn.title}</h3>
                      <span style={{ lineHeight:1.5 }}>{fn.content}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.functions}>
            <h2>Our Service Speaks for Itself</h2>
            <h6>Millions of users choose MEGA. Here is why:</h6>
            <div className={styles.evalutions}>
              <div className={styles["previous-btn"]}>
                <i className="fas fa-arrow-left"></i>
              </div>
              {evalutions.map((evalution, i) => {
                return (
                  <div className={styles.evalution} key={"eval" + i} data-main={i == 2 ? true : false}>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                    <p>{evalution.evalution}</p>
                    <p>{evalution.url_web}</p>
                  </div>
                )
              })}
              <div className={styles["next-btn"]}>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <script src="/javascripts/sidebar.js"></script>
      <script src="/javascripts/hidden.js"></script>
      <script src="/javascripts/dropdown.js"></script>
    </>
  )
}
