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

export default function NewReleases() {
  return (
    <>
      <PageContainer title="New Releases">
        <Heading1>Monthly New Releases show</Heading1>

        <ParaHighlight>
          <b>
            You ain&apos;t tuning in for the mixing - you&apos;re tuning in for
            the tunes!
          </b>
        </ParaHighlight>

        <ParaNormal>
          I&apos;m constantly clocking new tunes, being sent promo&apos;s and
          out right hassling people for what&apos;s hot. Then I bundle all that
          up, and spin it out as a show. There&apos;s stuff that was released in
          the last month, stuff that&apos;s due to be released and the odd bit
          of unreleased stuff. There&apos;s even some stuff from way back that I
          missed that I&apos;ll lash in there for good measure.
        </ParaNormal>

        <SoundCloudBox
          height="450"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/248499483&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
