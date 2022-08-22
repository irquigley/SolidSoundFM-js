import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
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
       </PageContainer>
    </>
  )
}
