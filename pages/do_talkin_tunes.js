import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
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

export default function Do_Talkin_Tunes() {
  return (
    <>
      <PageContainer title="How to: Talking Tunes">
        <Heading1>Interviews are boring!</Heading1>

        <BoxGroup color="orange">
          <Box title="Discovery">
            People are interested in MUSIC. We want to hear what you think is
            interesting, teach us what you know."
          </Box>
          <Box title="Chat">
            People want to hear all the side-bar chat. Any random topic that
            comes up in natural or unnatural conversation.
          </Box>
        </BoxGroup>

        <Heading2>The Process</Heading2>
        <ParaNormal>
          Here is the production process. Like most things, it's flexible and we
          can figure out what works.
        </ParaNormal>
      </PageContainer>
    </>
  );
}
