import Image from 'next/image'
import styles from '@/styles/About.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS, faSchool } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
  <>
    <h2>About</h2>
    <div className={styles.wrapper}>
      <Image src="/icon.jpg" width={200} height={200} className={styles.icon} alt='icon' />
      <span className={styles.profile}>
        <h3>Takumi Ohyama<span className={styles.username}>ohyama4z</span></h3>
      </span>
      </div>
  </>
  )
}