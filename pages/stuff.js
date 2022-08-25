import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";

import PageContainer from "../components/PageContainer";
import FacebookPlugin from "../components/scripts/facebook";

import styles from "../styles/Home.module.css";
import SoundCloudBox from "../components/SoundCloudBox";
import Para from "../components/Para";

export default function stuff() {
  return (
    <>
      <PageContainer title="Solid Sound Stuff Page">
        <Heading1>Page of stuff!</Heading1>

        <Para color="orange-bold">Orang bold</Para>
        <Para color="grey">Grey</Para>
      </PageContainer>
    </>
  );
}
