const Styles = [
  "grey",
  "orange-bold",
  "orange-light",
  "blue-bold",
  "blue-light"
];

export default function Part({ color, children }) {
  const classStyle = Styles.includes(color) ? color : Styles[0];

  return (
    <>
      <div className={classStyle}>{children}</div>
      <style jsx global>
        {`
          div.grey {
            background: #eee;
            color: #000;
          }

          div.orange-bold {
            background: #ffcf50;
            color: #000;
          }

          div.orange-light {
            background: #f9f2d0;
            color: #000;
          }

          div.blue-bold {
            background: #2cf;
            color: #fff;
          }

          div.blue-light {
            background: #cdebf9;
            color: 000;
          }

          div a {
            color: #28f;
          }

          div a:hover {
            background: #fff;
          }
        `}
      </style>
    </>
  );
}
