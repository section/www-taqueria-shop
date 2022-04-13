import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Taqueria</title>
        <meta name="description" content="Mi Taqueria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Taqueria!
        </h1>

        <div className={styles.grid}>
          <a href="https://www.merriam-webster.com/dictionary/taco" className={styles.card}>
            <h2>Tacos &rarr;</h2>
            <p>Crispy or soft corn or wheat tortilla that is folded or rolled and stuffed with a mixture!</p>
          </a>

          <a href="https://www.merriam-webster.com/dictionary/burrito" className={styles.card}>
            <h2>Burritos &rarr;</h2>
            <p>A flour tortilla rolled or folded around a filling (as of meat, beans, and cheese)!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.section.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Section Logo" width={100} height={100} />
          </span>
        </a>
      </footer>
    </div>
  )
}
