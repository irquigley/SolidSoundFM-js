import Link from "next/link";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import GapSmall from "../components/GapSmall";
import GapMedium from "../components/GapMedium";
import BoxGroup from "../components/BoxGroup";
import Box from "../components/Box";

import PageContainer from "../components/PageContainer";
import SoundCloudBox from "../components/SoundCloudBox";

import Part from "../components/Part";
import ImageExt from "../components/ImageExt";

export default function do_guest_mix() {
  return (
    <>
      <PageContainer title="Guest Mixes">
        <Heading1>Recording a Guest Mix</Heading1>
        <GapSmall />

        <Heading2 >WHAT TYPE OF MIX?</Heading2>
        <Part color="blue-light">
          <p>
          Is this going to be a Guest Mix or a Producer Mix?
          </p>
        </Part>
        <BoxGroup color="blue">
          <Box title="GUEST MIX">
            A DJ set, mixing music from any artists. <br />
            <b>30 minutes</b> long (give or take a few minutes).
          </Box>
          <Box title="PRODUCER MIX">
            Artist&apos;s <b>Own Music</b>, remixes or bootlegs. <br />
            <b>ANY</b> length between 25 - 90 minutes.
          </Box>
        </BoxGroup>

        <Heading2 color="blue">RULES</Heading2>
        <Part color="blue-light">
          <p>
          These are not hard rules written in stone! Talk to me if you need to.
          The door is always open, and the list is operated on First come, First
          played order. So when there are 4 mixes &quot;in the bag&quot;, mixes
          submitted after will go in the next guest mix show.
          </p>
        </Part>
        <BoxGroup color="orange">
          <Box title="Exclusive">
            Mixes need to be <b>Exclusive to Solid Sound</b> channel, and not
            released or available anywhere else.
          </Box>
          <Box title="Genre">
            That&apos;s totally up to you. Play from your heart, whatever you
            are excited about. Please try to be original and enjoy yourself!
          </Box>
          <Box title="Tracklist">Would be nice, but entirely optional.</Box>
          <Box title="320kbps">
            Mixes are broadcast on FM radio, which is actually pretty grainy and
            goes through heavy compression before going to the antenna. Also,
            mixes are uploaded to SoundCloud and Hypeddit as mp3 in 320kbps. It
            makes everyone&apos;s life easier if you please <b>send as MP3</b>.
            You can send me .wav or .flac if you want, and I&apos;ll convert it.
          </Box>
        </BoxGroup>
        <GapMedium />

        <Heading1>What are the benefits?</Heading1>
        <Part color="khaki">
          <p>
          If I think the mix is up to standard (have yet to decline a mix), then
          ...</p>
        </Part>
        <BoxGroup color="yellow">
          <Box title="Hypeddit">
            The MP3 is downloaded via Hypeddit, with a gate step of Follow Your
            Account and Repost
          </Box>
          <Box title="FM Broadcast">
            Your mix will be played on the radio on 93.9FM in Dublin, Ireland.
          </Box>
          <Box title="Playlist">
            your mix will feature at the top of the Guest Mixes play list for a
            number of weeks, along-side 100+ other mixes with combined listen
            count of <b>100k+</b>
          </Box>
          <Box title="Mastering">
            If your mix needs it, the mix will get a light touch mastering. (see
            below)
          </Box>
          <Box title="Artwork">
            using my ninja paint skills, I&apos;ll create a graphic for the mix
          </Box>
        </BoxGroup>

        <Heading2 color="blue">Sending files </Heading2>
        <Part color="blue-light">
          <p>
          The two simplest options for sending files are
          <br />
          <br />
          <b>SoundCloud</b>
          <br />
          Upload the mix to your SoundCloud as Private with Download Enabled,
          then Share the sound and send me the link.
          <br />
          <br />
          <b>We Transfer</b>
          <br />
          Go to{" "}
          <Link href="https://wetransfer.com">
            <a>WeTransfer.com</a>
          </Link>
          . Select &quot;free&quot; option. Click the (...) and select
          &quot;Send as Link&quot;. Add your files, click &quot;Transfer&quot;
          and then send me the Link to download.
          <br />
          <ImageExt
            src="/page/wetran.jpg"
            autoShrink="true"
            alt="We Transfer dialog"
          />
          </p>
        </Part>

        <Heading2 color="blue">Mastering a DJ mix</Heading2>
        <Part color="blue-light">
          <p>
          If your mix needs it, I can will &quot;Master&quot; your mix. Just to
          give it a lift. If you do not want this, just let me know. A good few
          mixes that are sent don&apos;t really need it. Here is a video I made
          on the subject..
          </p>
        </Part>
        <iframe
          className="youtube-iframe"
          src="https://www.youtube.com/embed/9c8u6RL6KcM"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <br />
        <Part color="blue-light">
          <p>
          I don&apos;t claim to be a Sound Engineer or professional, but this is
          what works for me.
          </p>
        </Part>

        <Heading2 color="blue">Editing a DJ mix</Heading2>
        <Part color="blue-light">
          <p>
          Editing is cheating, or is it? Well if your 20 minutes into the mix
          and fuck up, rewind and go again. If your not capable of editing, send
          it on and I&apos;ll try to edit it for you.
          </p>
        </Part>
        <iframe
          className="youtube-iframe"
          src="https://www.youtube.com/embed/6mXPx1CTAgI"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <br />
      </PageContainer>
    </>
  );
}
