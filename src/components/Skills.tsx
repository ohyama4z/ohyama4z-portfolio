import styles from '@/styles/Skills.module.scss'

import Link from 'next/link'
import { Type } from 'typescript'

type Skill = {
  type: "言語" | "フレームワーク" | "その他"
  name: string
  description: JSX.Element
}
const skills: Skill[] = [
  {
    type: "言語",
    name: "TypeScript",
    description: <>一番好きな言語であり、もっぱら開発はこれでやります。業務経験(就業型インターン)あり。<Link href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/48949#event-4023115366" target="_blank" rel="noopener noreferrer">DefinitelyTypedへのコントリビュート経験</Link>もあります。</>
  },
  {
    type: "言語",
    name: "Python",
    description: <>スクリプト用途でちょくちょく書きます。高専プロコンや研究でも使用しました。</>
  },
  {
    type: "言語",
    name: "Go",
    description: <>高専プロコンでgRPCサーバ、Webサーバを書くのに使用しました。そこそこ好きです。</>
  },
  {
    type: "言語",
    name: "C",
    description: <>研究や高専の授業で書ける程度にかけます。</>
  },
  {
    type: "フレームワーク",
    name: "Vue 2系",
    description: <>ものが作れるくらいに使えます。Vuexなども使ってきました。業務経験あり</>
  },
  {
    type: "フレームワーク",
    name: "Vue 3系",
    description: <>個人開発で使っています。script setupの書き味が気持ち良くて気に入っています。</>
  },
  {
    type: "フレームワーク",
    name: "React",
    description: <>Vueと同程度に使えます。素のTSが書けるので好きです。</>
  },
  {
    type: "フレームワーク",
    name: "Express",
    description: <>個人開発でバックエンドを書くときによく使います。</>
  },
  {
    type: "その他",
    name: "ESLint + Prettier",
    description: <>個人で使う分に困らない程度の設定ができます。JS Standard派です。</>
  },
  {
    type: "その他",
    name: "Jest",
    description: <>単体テストに使います。業務でも使用しています。</>
  },
  {
    type: "その他",
    name: "Docker",
    description: <>複数人で開発する際などの環境差異を気にしてよく使います。Docker+VSCode Remote Containerの組み合わせで環境構築するのが気に入っています。</>
  },
  {
    type: "その他",
    name: "Git/GitHub",
    description: <>個人開発で使う分には困らない程度に使えます。GitHub Actionsも使えます。</>
  },
]

const pickType = (type: Skill["type"]):JSX.Element[] => 
  skills.filter(skill => skill.type === type).map(({ name, description }) =>
    <li key={name}>
      <span>{name}</span><span>{description}</span>
    </li>
  )

const languages = pickType("言語")
const frameworks = pickType("フレームワーク")
const others = pickType("その他")

export default function Skills() {
  return (
    <>
      <h2 id="skills">Skills</h2>
      
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <span>
          <ul>
            <li>言語</li>
            <ul>
              {languages}
            </ul><br />
          </ul>
          <ul>
            <li>フレームワーク</li>
            <ul>
              {frameworks}
            </ul>
          </ul>
        </span>
        <span>
          <ul>
            <li>その他</li>
            <ul>
              {others}
            </ul>
          </ul>
        </span>
        </div>
      </div>
    </>
  )
}