const COLORS = [ "blue", "pink", "purple"];

export default function Heading2({ color, children }) {

  const checkColor = COLORS.includes(color) ? color : COLORS[0];

  return (
    <>
      <h3 className={checkColor}>{children}</h3>    
    </>
  );
}
