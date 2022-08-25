import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import ParaMega from "../components/ParaMega";
import ParaHighlight from "../components/ParaHighlight";
import ParaLight from "../components/ParaLight";
import ParaNormal from "../components/ParaNormal";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";

import PageContainer from "../components/PageContainer";
import FacebookPlugin from "../components/scripts/facebook";

import styles from "../styles/Home.module.css";
import SoundCloudBox from "../components/SoundCloudBox";

export default function Hard_Rave() {
  return (
    <>
      <PageContainer title="Hard Rave Energy">
        <Heading1>Hard Rave Energy</Heading1>

        <ParaNormal>
          Always finding great unreleased tunes and putting them out via Solid
          Sound&apos;s label Hard Rave Energy. Free Download!
        </ParaNormal>
        <SoundCloudBox
          height="450"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/774332523&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
