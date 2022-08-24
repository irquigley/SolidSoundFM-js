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
import SoundCloudBox from "../components/SoundCloudBox";

export default function stuff() {
  return (
    <>
      <PageContainer title="Solid Sound Stuff Page">
        <Heading1>Page of stuff!</Heading1>

        <ParaNormal>No stuff yet!</ParaNormal>
      </PageContainer>
    </>
  );
}
