import Link from "next/link";
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
import SoundCloudBox from "../components/SoundCloudBox";

import PageContainer from "../components/PageContainer";
import FacebookPlugin from "../components/scripts/facebook";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <PageContainer title="Solid Sound FM">
        <Heading1>What is it?</Heading1>
        <FacebookPlugin />
        <ParaMega>
          <b>
            Tuesday 9-11pm
            <br />
            Solid Sound is a radio-show and podcast broadcast / podcast every
            week.
          </b>
        </ParaMega>
        <ParaLight>Established in 2013 and hosted by Kushti.</ParaLight>
        <ParaNormal>
          Every Tuesday on 93.9FM in Dublin,{" "}
          <Link href="https://tunein.com/radio/Dublin-South-FM-939-s135815/">
            <a>Tune-In</a>
          </Link>
          and
          <Link href="http://www.DublinSouthFm.ie">
            <a>Dublin South FM</a>
          </Link>
          .<br />
          You will be treated and greeted with some amazing random
          &apos;rave&apos; music.
          <br />
          <br />
          The main elements are:{" "}
          <Link href="/interviews">
            <a>Interviews</a>
          </Link>
          ,{" "}
          <Link href="/hard_rave">
            <a>Music Releases</a>
          </Link>
          ,
          <Link href="/guestmixes">
            <a>Guest Mixes</a>
          </Link>{" "}
          and{" "}
          <Link href="/newreleases">
            <a>New Music Reviews</a>
          </Link>
          . As well as any other random things that happen as they happen.
        </ParaNormal>
        <GapSmall />

        <Heading1>What is Hard Rave Music?</Heading1>
        <ParaNormal>
          You&apos;ll get anything from; Jungle, Techno, Ghetto Funk, Hardcore
          techno, Garage, Drum &amp; Bass, Electro house, Mutant Bass, Bounce,
          Gabber, Old school breakbeat hardcore, Breakcore and well just about
          anything. <br />
          Always on the look-out for something NEW so fire me tunes or if
          you&apos;re a DJ, then join the guest mix crew and send me on a 30
          minute mix. Don&apos;t ask &quot;what should I play&quot;. Play the
          tunes you love and share that passion. It&apos; community radio and we
          are the Dublin Rave Community!
        </ParaNormal>
        <GapSmall />
        <SoundCloudBox
          height="350"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/786476694&amp;color=%23444444&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
