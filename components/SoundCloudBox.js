export default function SoundCloudBox({ src, height }) {
  if (height === undefined || height === null) {
    height = 300;
  }
  return (
    <iframe
      width="100%"
      height={height}
      scrolling="no"
      allow="autoplay"
      src={src}
      frameBorder="none"
    ></iframe>
  );
}
