import Link from 'next/link'
import styles from '@/styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}><a href="/">ohyama4z{"'"}s portfolio</a></div>
      <div className={styles.navigation}><Link href="#about" scroll={false}>About</Link></div>
      <div className={styles.navigation}><Link href="#works" scroll={false}>Works</Link></div>
      <div className={styles.navigation}><Link href="#skills" scroll={false}>Skills</Link></div>
    </header>
  )
}