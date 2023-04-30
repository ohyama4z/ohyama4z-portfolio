import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>ohyama4z portfolio</h1>
      <Image src="/icon.jpg" width={200} height={200} className={styles.icon} alt='icon' />
    </div>
  )
}
