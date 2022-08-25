export default function ImageExt({ src, alt, autoShrink }) {
  if (alt === undefined || alt === null || typeof alt !== "string")
    alt = "Missing";

  if (autoShrink !== undefined && autoShrink.toLowerCase() === "true") {
    return <img src={src} alt={alt} className="auto-shrink" />;
  } else {
    return <img src={src} alt={alt} />;
  }
}
