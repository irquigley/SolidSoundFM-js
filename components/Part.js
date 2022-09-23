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
      <style>
        {`
          div.khaki {
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

          div.khaki a { 
            color: #f50;
          }

          div.pink-light {
            background: #ffe2f8;
            color: 000;            
          }

          div a:hover {
            background: #fff;
          }
        `}
      </style>
    </>
  );
}
