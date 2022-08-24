import Link from 'next/link'
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
	<Heading1>What is it?</Heading1>
	<FacebookPlugin />
	<ParaMega>Tuesday 9-11pm<br/>Solid Sound is a radio-show and podcast broadcast / podcast every week</ParaMega>
	<ParaLight>Established in 2013 and hosted by Kushti.</ParaLight>
	<ParaNormal>
	Every Tuesday on 93.9FM in Dublin, <link href="https://tunein.com/radio/Dublin-South-FM-939-s135815/">Tune-In</link> and <link href="http://www.DublinSouthFm.ie">Dublin South FM</link>.<br/>You will be treated and greeted with some amazing random &apos;rave&apos; music.<br/><br/>
	The main elements are: <link href="/interviews">Interviews</link>, <link href="/hard_rave">Music Releases</link>,  <link href="/guestmixes">Guest Mixes</link> and <link href="/newreleases">New Music Reviews</link>, as well as any other random things that happen as they happen.
	</ParaNormal>
	<GapSmall />
          
	<Heading1>What is Hard Rave Music?</Heading1>
	<ParaNormal>You&apos;ll get anything from; Jungle, Techno, Ghetto Funk, Hardcore techno, Garage, Drum &amp; Bass, Electro house, Mutant Bass, Bounce, Gabber, Old school breakbeat hardcore, Breakcore and well just about anything. <br/>
	Always on the look-out for something NEW so fire me tunes or if you&apos;re a DJ, then join the guest mix crew and send me on a 30 minute mix. Don&apos;t ask &quot;what should I play&quot;. Play the tunes you love and share that passion. It&apos; community radio and we are the Dublin Rave Community!
	</ParaNormal>
	<GapSmall />

	<Heading1>Most Recent Shows</Heading1>    
             
    
       </PageContainer>
    </>
  )
}
