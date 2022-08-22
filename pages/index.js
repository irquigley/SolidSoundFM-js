import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import ParaMega from '../components/ParaMega'
import ParaHighlight from '../components/ParaHighlight'
import ParaLight from '../components/ParaLight'
import ParaNormal from '../components/ParaNormal'
import Article from '../components/Article'

import PageContainer from '../components/PageContainer'
import FacebookPlugin from '../components/scripts/facebook'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
       <PageContainer title="Solid Sound FM">
          <Heading1>Header big</Heading1>
          <FacebookPlugin />
          
          <Heading1>Header Other</Heading1>
          <ParaMega>Para Mega</ParaMega>
    
          <Heading2>Header small</Heading2>
          <Article>          
            <ParaHighlight>ParaHighlight</ParaHighlight>
            <ParaLight>ParaLight</ParaLight>
            <ParaNormal>ParaNormal</ParaNormal>
          </Article>
    
       </PageContainer>
    </>
  )
}
