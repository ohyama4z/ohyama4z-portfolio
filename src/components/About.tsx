import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import History from '@/components/History'

export default function About() {
  return (
  <>
  <h2 id="about">About</h2>
  <div className={styles.wrapper}>
    <span className={styles.avatar}>
      <Image
        src="/icon.jpg"
        width={250}
        height={250}
        className={styles.image}
        sizes="100vw"
        alt='ohyama4zアイコン'
      />
    </span>
    <span className={styles.profile}>
      <div>
        <span className={styles["real-name"]}>Takumi Ohyama</span>
        <span className={styles["handle-name"]}>ohyama4z</span>
        <span>
          <Link
            href="https://twitter.com/ohyama4z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitterSquare} 
              className={styles.icon}
              style={{ color: "#1DA1F2" }}
            />
          </Link>
          <Link
            href="https://github.com/ohyama4z"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FontAwesomeIcon
            icon={faGithubSquare}
            className={styles.icon}
            style={{ color: "#171515" }}
          />
          </Link>
        </span>
      </div>
      <div><span>苫小牧工業高等専門学校 専攻科</span> <span>情報エレクトロニクス系 1年</span></div>
      <History />
    </span>
  </div>
  </>
  )
}