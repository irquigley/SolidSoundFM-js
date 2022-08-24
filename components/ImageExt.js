export default function ImageExt({ src, autoShrink }) {
  if (autoShrink !== undefined && autoShrink.toLowerCase() == "true") {
    return <img src={src} className="auto-shrink" />;
  } else {
    return <img src={src} />;
  }
}
