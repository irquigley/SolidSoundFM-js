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
            background: #edeadf;
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

          div.blue-bold a,
          div.blue-light a {
            color: #04f;
          }

          div.orange-light a,
          div.orange-bold a {
            color: #f00;
          }
          div.grey a { 
            color: #f50;
          }

          div a:hover {
            background: #fff;
          }
        `}
      </style>
    </>
  );
}
