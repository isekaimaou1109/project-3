import styles from '../styles/index.module.scss'
import Header from './header.js'


export default function Container({ children, title }) {
  return (
    <>
      <Header title={title} />
      <div className={styles["container"]}>
        {children}
      </div>
    </>
  )
}