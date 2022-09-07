import Link from "next/link";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Para from "../components/Para";

import GapMedium from "../components/GapMedium";
import SoundCloudBox from "../components/SoundCloudBox";

import PageContainer from "../components/PageContainer";
import Indent from "../components/Indent";

export default function Home() {
  return (
    <>
      <PageContainer title="Solid Sound FM">
        <Heading1>What is it?</Heading1>

        <Para color="orange-bold">
          <b>Solid Sound is a weekly radio-show. FM Broadcast and Podcast.</b>
        </Para>
        <Para color="orange-light">
          Established in 2013 and hosted by Kushti.
          <br />
          Broadcast Every Tuesday, 9-11pm on 93.9FM in Dublin,{" "}
          <Link href="https://tunein.com/radio/Dublin-South-FM-939-s135815/">
            <a>Tune-In</a>
          </Link>{" "}
          and{" "}
          <Link href="http://www.DublinSouthFm.ie">
            <a>Dublin South FM</a>
          </Link>
          .<br />
          Podcast Every week on{" "}
          <Link href="https://soundcloud.com/solidsoundfm">
            <a>Soundcloud.com</a>
          </Link>
        </Para>
        <Para color="grey">
          <b>Main elements are: </b>
          <br />
          <Indent>
            <Link href="/interviews">
              <a>Talking Tunes</a>
            </Link>
            , a podcast where we talk to people about music. <br />
            <Link href="/guestmixes">
              <a>Guest Mixes</a>
            </Link>
            , over 200 DJ and producer mixes across the spectrum of hard rave
            genres.
            <br />
            <Link href="/hard_rave">
              <a>Record Label</a>
            </Link>
            , releasing tunes under the &apos;Hard Rave Energy&apos; lable.{" "}
            <br />
            <Link href="/newreleases">
              <a>Music Reviews</a>
            </Link>
            , a once a month round up  of everything new and good that caught my
            ear.
          </Indent>
        </Para>
        <GapMedium />

        <Heading1>What is Hard Rave Music?</Heading1>
        <Para color="grey">
          You&apos;ll get anything from; Jungle, Techno, Ghetto Funk, Hardcore
          techno, Garage, Drum &amp; Bass, Electro house, Mutant Bass, Bounce,
          Gabber, Old school breakbeat hardcore, Breakcore and well just about
          anything. <br />
          Always on the look-out for something NEW so fire me tunes or if
          you&apos;re a DJ, then join the guest mix crew and send me on a 30
          minute mix. Don&apos;t ask &quot;what should I play&quot;. Play the
          tunes you love and share that passion. It&apos; community radio and we
          are the Dublin Rave Community!
        </Para>
        <GapMedium />
        <Heading2>Most Recent Shows...</Heading2>
        <SoundCloudBox
          height="350"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/786476694&amp;color=%23444444&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
