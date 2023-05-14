import styles from '@/styles/Works.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


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
    description: <>今見てもらっているポートフォリオ</>,
    github: 'https://github.com/ohyama4z/ohyama4z-portfolio',
    tech: ['Next.js', 'TypeScript', 'Sass']
  },
  {
    title: 'Kakomon-Management-System',
    description: <>収集した過去問を管理するシステム。認証にNetlify Identifyを使用し、<a href="https://github.com/netlify/git-gateway" target="_blank" rel="noopener noreferrer">netlify/git-gateway</a>でファイルの編集・追加などを行っています。</>,
    github: 'https://github.com/ohyama4z/Kakomon-Management-System',
    tech: ['TypeScript', 'Netlify Identify','Vue', 'netlify/git-gateway']
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
          <a
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
          >
          <span className={styles["github-link-wrapper"]}>
            <FontAwesomeIcon icon={faGithubSquare} className={styles["github-icon"]} style={{ color: "#171515" }} />
            <span>GitHubを開く</span>
          </span>
          </a>
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
      <h2>Works</h2>
      <div className={styles.wrapper}>
        {workList}
      </div>
    </>
  )
}