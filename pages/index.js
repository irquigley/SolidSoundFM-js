import Link from "next/link";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Part from "../components/Part.js";

import GapMedium from "../components/GapMedium";
import SoundCloudBox from "../components/SoundCloudBox";

import PageContainer from "../components/PageContainer";
import IconGroup from "../components/IconGroup";
import IconLink from "../components/IconLink";


export default function Home() {
  return (
    <>
      <PageContainer title="Solid Sound FM">
        <Heading1>What is it?</Heading1>

        <Part color="orange-bold">
          <p>
          <b>Solid Sound is a weekly radio-show. FM Broadcast and Podcast.</b>
          </p>
        </Part>
        <Part color="orange-light">
          <p>
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
          </p>
        </Part>
        <Part color="grey">
          <p>
          <b>Main elements are: </b>
          </p>
        
          <ul>
            <li>
            <Link href="/interviews">
              <a>Talking Tunes</a>
            </Link>
            , a podcast where we talk to people about music.
            </li>
            <li>
            <Link href="/guestmixes">
              <a>Guest Mixes</a>
            </Link>
            , over 200 DJ and producer mixes across the spectrum of hard rave
            genres.
            </li>
            <li>
            <Link href="/hard_rave">
              <a>Record Label</a>
            </Link>
            , releasing tunes under the &apos;Hard Rave Energy&apos; lable.{" "}
            </li>
            <li>
            <Link href="/newreleases">
              <a>Music Reviews</a>
            </Link>
            , a once a month round up  of everything new and good that caught my
            ear.
            </li>
          </ul>
          </Part>
    
        <GapMedium />

        <Heading1>What is Hard Rave Music?</Heading1>
        <Part color="orange-light">
          <p>Jungle, Gabber, Crossbreed, Breakcore, Drum &amp; Bass, Old school rave, Bass, Tekno and Techno, Ghetto Tech, Electro and anything else with ummpfff!</p></Part>
      <Part color="grey">
        <p>        
          I&apos;m always on the look-out for something new and interesting. This is music for people who get bored easily and want to hear an eclectic mixture of rave genres. Anything goes, as long as it&apos;s not boring, predictable or unimaginative.
          </p>
          <p>
          The music review show, and guest mixes will cover everything from 100 BPM to 200 BPM and beyond. All styles from disco to ravecore, from electro house to hi-tech.
          </p>
        </Part>
        <GapMedium />
        <Heading2>Socials and Links</Heading2>
        <IconGroup>
            <IconLink link="https://soundcloud.com/solidsoundfm" text="Solid Sound FM" image="/page/homepage/icon-soundcloud.jpg" />
            <IconLink link="https://facebook.com/kushti.23" text="Facebook Kushti" image="/page/homepage/icon-kushti.jpg" />
            <IconLink link="https://soundcloud.com/hardraveenergy" text="Hard Rave Energy" image="/page/homepage/icon-hre.jpg" />
            <IconLink link="https://youtube.com/solidsoundfm" text="Solid Sound FM" image="/page/homepage/icon-youtube.jpg" />
            <IconLink link="https://linktr.ee/solidsoundfm" text="Link Tree" image="/page/homepage/icon-morelinks.jpg" />
        </IconGroup>
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
