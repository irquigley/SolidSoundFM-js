import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import ParaMega from "../components/ParaMega";
import ParaHighlight from "../components/ParaHighlight";
import ParaLight from "../components/ParaLight";
import ParaNormal from "../components/ParaNormal";
import Article from "../components/Article";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";

import PageContainer from "../components/PageContainer";
import FacebookPlugin from "../components/scripts/facebook";

import styles from "../styles/Home.module.css";

export default function Kushti() {
  return (
    <>
      <PageContainer title="Kushti">
        <Heading1>Kushti</Heading1>
        <Article>
          <ParaNormal>
            Kushti is a multi-genre 'hard rave' style DJ.
            <br />
            <br />
            An old school veteran of the early 90's UK rave scene who's been
            DJing on and off for 20 years. He started out on some awful
            home-tweaked decks, then progressed to playing Technics 1210's at
            house parties. After experiencing the genesis of the early 90's
            rave, he moved to the Netherlands in 1996 to peruse his love of
            gabber. In the first decade of the new millennium things quietened
            down. He moved back to the UK and then on to Ireland while he
            focused on family.
            <br />
            <br />
            In 2013 his passion for music was reignited when he began presenting
            Solid Sound radio show on Dublin South FM 93.9FM and was part of The
            Energy Collective crew until 2018. Like any old schooler, vinyl
            still has place in his heart, but these days he pushes buttons on a
            laptop, with the occasional dabble on CDJ's. He sees digital
            performance as the only way to experience so many different genre's
            of music and keep things fresh. Aiming to make each major set he
            plays as unique as possible.
            <br />
            <br />
          </ParaNormal>
        </Article>
        <GapSmall />

        <Heading2>History</Heading2>
        <Article>
          <Heading3>1973, born in UK</Heading3>
          <img src="page/baby.png" className="auto-shrink" />

          <Heading3>1992, discovered rave</Heading3>
          <img src="page/Rave92.jpg#" className="auto-shrink" />

          <Heading3>1996, living in Holland</Heading3>
          <img src="page/me-1210s.jpg" className="auto-shrink" />

          <Heading3>
            2002-2010, moved to Ireland, got married, had kids
          </Heading3>
          <img src="page/2002-2010.png" className="auto-shrink" />

          <Heading3>2013, started Solid Sound (the original 'logo')</Heading3>
          <img src="page/ss-logo-2013.jpg" className="auto-shrink" />

          <Heading3>
            Drinking Chateauneuf de Pape, on the doorstep of the chalet,
            Bangface Weekender 2015
          </Heading3>
          <img src="page/me-bang-du-pape.jpg" className="auto-shrink" />

          <Heading3>Rise of the Celts, Bangface Weekender 2018</Heading3>
          <img src="page/me-bangface-2018.jpg" className="auto-shrink" />
        </Article>
        <GapSmall />
      </PageContainer>
    </>
  );
}
