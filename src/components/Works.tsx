import styles from '@/styles/Works.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'


type Work = {
  title: string
  description: JSX.Element
  github: string
  tech: string[]
}

// 順次追加
const works: Work[] = [
  {
    title: 'ohyama4z portfolio',
    description: <>今見てもらっているポートフォリオ。Next.jsで書いています。</>,
    github: 'https://github.com/ohyama4z/ohyama4z-portfolio',
    tech: ['Next.js', 'TypeScript', 'Sass']
  },
  {
    title: "janken-rating",
    description: <>オンラインでジャンケンができるWebアプリです。WebSocketによるリアルタイムなマッチングと対戦処理を実現しています。画像の保存にはs3互換のローカルストレージである<Link href="https://min.io/" target="_blank" rel="noopener noreferrer">MinIO</Link>を使っています。</>,
    github:"https://github.com/ohyama4z/janken-rating",
    tech: ['Vue', 'Express.js', 'MinIO', 'MySQL']
  },
  {
    title: "timetable-assistant",
    description: <>時間割を教えてもらうためのGoogleアシスタントアプリ。DialogFlowで自然言語を処理し、AWS lambda越しに対応する時間割を返します。</>,
    github: "https://github.com/ohyama4z/timetable-assistant",
    tech: ['TypeScript', 'Googleアシスタント', 'DialogFlow', 'AWS Lambda']
  },
  {
    title: 'Kakomon-Management-System',
    description: <>収集した過去問を管理するシステム。認証にNetlify Identifyを使用し、<Link href="https://github.com/netlify/git-gateway" target="_blank" rel="noopener noreferrer">netlify/git-gateway</Link>でファイルの編集・追加などを行っています。</>,
    github: 'https://github.com/ohyama4z/Kakomon-Management-System',
    tech: ['TypeScript', 'Netlify Identify','Vue', 'netlify/git-gateway']
  },
  {
    title: "remo-discord-bot",
    description: <>スマートリモコンであるNature RemoをDiscordから操作するためのDiscord Botです。<Link href="https://developer.nature.global/" target="_blank" rel="noopener noreferrer">Nature Remo API</Link>を使用しています。</>,
    github: "https://github.com/ohyama4z/remo-discord-bot",
    tech: ["TypeScript", "Nature Remo", "Discord Bot"]
  },
  {
    title: "IQ200-wordle-solver",
    description: <><Link href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noopener noreferrer">Wordle</Link>が流行っていた際に作ったWordleソルバ(？)。weblioをスクレイピングし、検索数上位の英単語を順にWordleに入力します。</>,
    github: "https://github.com/ohyama4z/IQ200-wordle-solver",
    tech: ['TypeScript', 'Puppeteer']
  }
  
]

const workList = works.map((work) => {
  const techList = work.tech.map((tech) => {
    return <div key={tech} className={styles.tag}>{tech}</div>
  })

  return (
    <div key={work.title} className={styles.card}>
      <h3 className={styles.title}>{work.title}</h3>
      
        <div className={styles["github-link"]}>
          <Link
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
          >
          <span className={styles["github-link-wrapper"]}>
            <FontAwesomeIcon icon={faGithubSquare} className={styles["github-icon"]} style={{ color: "#171515" }} />
            <span>GitHubを開く</span>
          </span>
          </Link>
        </div>
      <div className={styles.description}>{work.description}</div>
      <span className={styles["footer"]}>
        <div className={styles["tag-wrapper"]}>{techList}</div>
      </span>
    </div>
  )
})

export default function Works() {
  return (
    <>
      <h2 id="works">Works</h2>
      <div className={styles.wrapper}>
        {workList}
      </div>
    </>
  )
}