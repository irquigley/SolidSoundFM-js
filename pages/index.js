import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PageContainer from '../components/PageContainer'
import FacebookPlugin from '../components/scripts/facebook'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
       <PageContainer title="Solid Sound FM">
          <div>HELLO</div>
          <FacebookPlugin />
       </PageContainer>
         
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
