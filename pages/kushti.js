import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import Part from "../components/Part";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";
import ImageExt from "../components/ImageExt";

import PageContainer from "../components/PageContainer";
import FacebookPlugin from "../components/scripts/facebook";


export default function Kushti() {
  return (
    <>
      <PageContainer title="Kushti">
        <Heading1>Kushti</Heading1>
        <Part color="blue-bold">
          <p>
          <b>  Kushti is a multi-genre, hard rave style DJ.
          </b>
          </p>
        </Part>

        <Part color="blue-light">
          <p>
          An old school veteran of the early 90&apos;s UK rave scene who&apos;s
          been DJing on and off for 20 years. He started out on some awful
          home-tweaked decks, then progressed to playing Technics 1210&apos;s at
          house parties. After experiencing the genesis of the early 90&apos;s
          rave, he moved to the Netherlands in 1996 to peruse his love of
          gabber. In the first decade of the new millennium things quietened
          down. He moved back to the UK and then on to Ireland while he focused
          on family.
          </p>
          <p>
          In 2013 his passion for music was reignited when he began presenting
          Solid Sound radio show on Dublin South FM 93.9FM and was part of The
          Energy Collective crew until 2018. Like any old schooler, vinyl still
          has place in his heart, but these days he pushes buttons on a laptop,
          with the occasional dabble on CDJ&apos;s. He sees digital performance
          as the only way to experience so many different genre&apos;s of music
          and keep things fresh. Aiming to make each major set he plays as
          unique as possible.
          </p>
        </Part>

        <GapSmall />

        <Heading2 color="blue">History</Heading2>
        
        <Heading3>1973, born in UK</Heading3>
        <ImageExt src="/page/baby.png" autoShrink="false" />

        <Heading3>1992, discovered rave</Heading3>
        <ImageExt src="/page/Rave92.jpg#" autoShrink="false" />

        <Heading3>1996, living in Holland</Heading3>
        <ImageExt src="/page/me-1210s.jpg" autoShrink="true" />

        <Heading3>2002-2010, moved to Ireland, got married, had kids</Heading3>
        <ImageExt src="/page/2002-2010.png" autoShrink="true" />

        <Heading3>
          2013, started Solid Sound (the original &apos;logo&apos;)
        </Heading3>
        <ImageExt src="/page/ss-logo-2013.jpg" autoShrink="true" />

        <Heading3>
          Drinking Chateauneuf de Pape, on the doorstep of the chalet, Bangface
          Weekender 2015
        </Heading3>
        <ImageExt src="/page/me-bang-du-pape.jpg" autoShrink="true" />

        <Heading3>Rise of the Celts, Bangface Weekender 2018</Heading3>
        <ImageExt src="/page/me-bangface-2018.jpg" autoShrink="true" />
      </PageContainer>
    </>
  );
}
