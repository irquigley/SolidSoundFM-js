const COLORS = ["orange", "yellow", "blue", "pink"];

export default function BoxGroup({ color, children }) {
  const checkColor = COLORS.includes(color) ? color : COLORS[0];

  const combinedClass = "boxes " + checkColor;

  return (
    <>
      <div className={combinedClass}>{children}</div>
      <style global>
        {`
          .boxes a {
            color: #28f;
          }

          .boxes a:hover {
            background: #fff;
          }

          .boxes {
            text-align: center;
          }

          .boxes .box {
            display: inline-block;
            position: relative;
            vertical-align: top;
          }

          .boxes .box .title {
            padding: 8px 5px 5px 5px;
            font-weight: bold;
          }

          .boxes .box .body {
            padding: 10px;
          }

          .boxes.orange .box .title {
            background: #ffcf50;
          }

          .boxes.orange .box .body {
            border: 3px solid #ffcf50;
            background: #fff4dd;
          }

          .boxes.yellow .box .title {
            background: #ffe773;
          }

          .boxes.yellow .box .body {
            border: 3px solid #ffe773;
            background: #fff9e4;
          }

          .boxes.blue .box .title {
            background: #17a6ff;
            color: #000;
          }

          .boxes.blue .box .body {
            border: 3px solid #17a6ff;
            background: #eef5fa;
          }

          .boxes.pink .box .title {
            background: #ff8ae1;
            color: #fff;
          }

          .boxes.pink .box .body {
            border: 3px solid #ff8ae1;
            background: #ffe2f8;
          }
          

          /* --- WIDE ---------------*/
          @media (min-width: 600px) {
            .boxes .box {
              width: 360px;
              margin: 10px;
            }
          }

          /* --- NARROW  ---------------*/
          @media (max-width: 600px) {
            .boxes .box {
              width: 97%;
            }
          } /* ---- */
        `}
      </style>
    </>
  );
}
