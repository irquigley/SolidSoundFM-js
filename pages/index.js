import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import PageContainer from '../components/PageContainer'
import FacebookPlugin from '../components/scripts/facebook'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
       <PageContainer title="Solid Sound FM">
          <Header1>Header big</Header1>
          <FacebookPlugin />
          <Header2>Header small</Header2>
       </PageContainer>
    </>
  )
}
