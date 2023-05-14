import styles from '@/styles/Header.module.scss'

// TODO:navから遷移するようにする
export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}>ohyama4z{"'"}s portfolio</div>
      <div className={styles.navigation}>About</div>
      <div className={styles.navigation}>Works</div>
      <div className={styles.navigation}>Skills</div>
    </header>
  )
}