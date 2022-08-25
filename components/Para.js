const Styles = [
  "grey",
  "orange-bold",
  "orange-light",
  "blue-bold",
  "blue-light"
];

export default function Para({ color, children }) {
  const classStyle = Styles.includes(color) ? color : Styles[0];

  return (
    <>
      <p className={classStyle}>{children}</p>
      <style jsx global>
        {`
          p.grey {
            background: #eee;
            color: #000;
          }

          p.orange-bold {
            background: #ffcf50;
            color: #000;
          }

          p.orange-light {
            background: #f9f2d0;
            color: #000;
          }

          p.blue-bold {
            background: #2cf;
            color: #fff;
          }

          p.blue-light {
            background: #cdebf9;
            color: 000;
          }

          p a {
            color: #28f;
          }

          p a:hover {
            background: #fff;
          }
        `}
      </style>
    </>
  );
}
