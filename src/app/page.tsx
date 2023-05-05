import styles from '@/app/page.module.scss'

import About from '@/components/About'
import Works from '@/components/Works'
import Header from '@/components/Header'
import Skills from '@/components/Skills'


export default function Home() {
  return (
    <span className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
        <Works />
        <Skills />
      </main>
    </span>
  )
}
