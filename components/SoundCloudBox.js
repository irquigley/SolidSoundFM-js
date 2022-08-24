import iframe from 'next/iframe'

export default function SoundCloudBox({link, height}) {
      if (height === undefined || height === null) {
        height = 300;
      }
      return (
          <iframe width="100%" height={height} scrolling="no" allow="autoplay" src={link}></iframe>
      )
}
