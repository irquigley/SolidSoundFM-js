import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import ParaMega from '../components/ParagraphStyles'
import ParaHighlight from '../components/ParagraphStyles'
import ParaLight from '../components/ParagraphStyles'
import ParaNormal from '../components/ParagraphStyles'

import PageContainer from '../components/PageContainer'
import FacebookPlugin from '../components/scripts/facebook'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
       <PageContainer title="Solid Sound FM">
          <Heading1>Header big</Heading1>
          <FacebookPlugin />
          <Heading2>Header small</Heading2>
          <ParaMega>Para Mega</ParaMega>
          <ParaHighlight>ParaHighlight</ParaHighlight>
          <ParaLight>ParaLight</ParaLight>
          <ParaNormal>ParaNormal</ParaNormal>
    
       </PageContainer>
    </>
  )
}
