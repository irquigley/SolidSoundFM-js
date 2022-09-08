import Link from "next/link";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Part from "../components/Part";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";

import PageContainer from "../components/PageContainer";
import FacebookPlugin from "../components/scripts/facebook";

import styles from "../styles/Home.module.css";
import SoundCloudBox from "../components/SoundCloudBox";

export default function Interviews() {
  return (
    <>
      <PageContainer title="Talking Tunes">
        <Heading1>Talking Tunes</Heading1>
        <Part color="grey">
          <p>
          Interviews are one of the things I enjoy the most. Who are these
          people? What makes them tick? Much love and respect for everyone
          who&apos;s put up with my incoherent ramblings!
          </p>
        </Part>

        <Part color="orange-light">
          <p>
          For more information about being{" "}
          <Link href="do_talkin_tunes">
            <a>interviewed and the process</a>
          </Link>
          </p>
        </Part>

        <GapSmall />
        <SoundCloudBox
          height="450"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188751579&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
