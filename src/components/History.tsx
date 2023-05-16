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
    date: '2019/08',
    description: 'パソコン甲子園2019予選 出場'
  },
  {
    date: '2021/08',
    description: 'ラテラル・シンキング株式会社 インターン 参加'
  },
  {
    date: '2021/10',
    description: '第32回高専プロコン競技部門 1回戦突破'
  },
  {
    date: '2021/12',
    description: 'K-Secセキュリティウィンタースクール 参加'
  },
  {
    date: '2022/03',
    description: '株式会社jig.jp インターン 参加'
  },
  {
    date: '2022/08',
    description: '株式会社いい生活 サマーインターン 参加'
  },
  {
    date: '2022/09~現在',
    description: '株式会社いい生活 長期インターン 参加'
  },
  {
    date: '2022/10',
    description: '第33回高専プロコン競技部門 決勝進出'
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
          <dd>{description}</dd>
        </div>))
      }
      </dl>
    </div>
  )
}