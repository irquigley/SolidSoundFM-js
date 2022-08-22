import Head from 'next/head'
import Image from 'next/image'
import HeaderBig from '../components/HeaderBig'
import PageContainer from '../components/PageContainer'
import FacebookPlugin from '../components/scripts/facebook'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
       <PageContainer title="Solid Sound FM">
          <HeaderBig>Header big</HeaderBig>
          <FacebookPlugin />
       </PageContainer>
    </>
  )
}
