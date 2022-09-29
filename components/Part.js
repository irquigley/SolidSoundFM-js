const Styles = [
  "khaki",
  "orange-bold",
  "orange-light",
  "blue-bold",
  "blue-light",
  "pink-light"  
];

export default function Part({ color, children }) {
  const classStyle = Styles.includes(color) ? color : Styles[0];

  return (
    <>
      <div className={classStyle}>{children}</div>
    </>
  );
}
