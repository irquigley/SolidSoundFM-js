import Link from "next/link";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Part from "../components/Part";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";

import PageContainer from "../components/PageContainer";
import SoundCloudBox from "../components/SoundCloudBox";

import styles from "../styles/Home.module.css";

export default function GuestMixes() {
  return (
    <>
      <PageContainer title="Guest Mixes">
        <Heading1>Guest Mixes</Heading1>

        <Part color="blue-bold">
          <p>
          <b>Over 200 mixes, from DJ&apos;s across the world, packed into 30 minute bite sized chunks, every genre you can imagine.</b>          </p>
        </Part>
        <Part color="blue-light">
          <p>
          Do you want to{" "}
          <Link href="do_guest_mix">
            <a>submit</a>
          </Link>{" "}
          a guest mix?
          </p>
        </Part>
        
        <SoundCloudBox
          height="450"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/531708573&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
