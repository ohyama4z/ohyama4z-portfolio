import styles from '@/styles/History.module.scss'

type History = {
  date: string
  description: string
}

// 順次追加
const histories: History[] = [
  {
    date: '2018/04',
    description: '苫小牧工業高等専門学校 創造工学科 入学'
  },
  {
    date: '2023/03',
    description: '苫小牧工業高等専門学校 創造工学科 卒業'
  },
  {
    date: '2023/04',
    description: '苫小牧工業高等専門学校 専攻科 入学'
  }
]

export default function History() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>経歴</div>
      <dl>
      {
        histories.map(({ date, description }) => (
        <div key={`${date}${description}`} className={styles.item}>
          <dt className={styles.date}>{date}</dt>
          <dd className={styles.description}>{description}</dd>
        </div>))
      }
      </dl>
    </div>
  )
}