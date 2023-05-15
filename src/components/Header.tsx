import Link from 'next/link'
import styles from '@/styles/Header.module.scss'

// TODO:navから遷移するようにする
export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}><a href="/">ohyama4z{"'"}s portfolio</a></div>
      <div className={styles.navigation}><Link href="#about">About</Link></div>
      <div className={styles.navigation}><Link href="#works">Works</Link></div>
      <div className={styles.navigation}><Link href="#skills">Skills</Link></div>
    </header>
  )
}