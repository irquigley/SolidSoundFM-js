import Heading1 from "../components/Heading1";
import Part from "../components/Part";

import PageContainer from "../components/PageContainer";


import SoundCloudBox from "../components/SoundCloudBox";

export default function NewReleases() {
  return (
    <>
      <PageContainer title="New Releases" link="show">
        <Heading1>Monthly New Releases show</Heading1>

        <Part color="blue-bold">
          <p><b>
            You ain&apos;t tuning in for the mixing - you&apos;re tuning in for
            the tunes!
          </b>
          </p>
        </Part>

        <Part color="blue-light">
          <p>
          I&apos;m constantly clocking new tunes, being sent promo&apos;s and
          out right hassling people for what&apos;s hot. Then I bundle all that
          up, and spin it out as a show. There&apos;s stuff that was released in
          the last month, stuff that&apos;s due to be released and the odd bit
          of unreleased stuff. There&apos;s even some stuff from way back that I
          missed that I&apos;ll lash in there for good measure.
          </p>
        </Part>

        <SoundCloudBox
          height="450"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/248499483&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </PageContainer>
    </>
  );
}
