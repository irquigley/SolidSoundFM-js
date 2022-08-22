import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import ParaMega from '../components/ParaMega'
import ParaHighlight from '../components/ParaHighlight'
import ParaLight from '../components/ParaLight'
import ParaNormal from '../components/ParaNormal'
import Article from '../components/Article'
import GapSmall from '../components/GapSmall'
import GapMedium from '../components/GapMedium'
import BoxGroup from '../components/BoxGroup'
import Box from '../components/Box'

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
            <ParaNormal>ParaNormal with gapsmall next</ParaNormal>
          </Article>
          <GapSmall />
    
          <Heading2>Header small</Heading2>
          <Article>          
            <ParaLight>ParaLight</ParaLight>
            <ParaNormal>ParaNormal with gapmedium next</ParaNormal>
          </Article>
          <GapMedium />
          <ParaLight>ParaLight then this</ParaLight>
    
          <Heading2>Box group</Heading2>
          <Article>
            <ParaNormal>This is a boxgroup example with some text</ParaNormal>
            <BoxGroup color="orange">
              <Box title="one">Box One</Box>
            </BoxGroup>
          </Article>
    
       </PageContainer>
    </>
  )
}
