const COLORS = ["orange", "yellow", "blue", "pink", "purple"];

export default function BoxGroup({ color, children }) {
  const checkColor = COLORS.includes(color) ? color : COLORS[0];

  const combinedClass = "boxes " + checkColor;

  return (
    <>
      <div className={combinedClass}>{children}</div>
    </>
  );
}
