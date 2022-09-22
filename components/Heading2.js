const COLORS = [ "blue", "pink"];

export default function Heading2({ color, children }) {

  const checkColor = COLORS.includes(color) ? color : COLORS[0];

  return (
    <>
      <h3 className={checkColor}>{children}</h3>
      <style global>
        {`

          h3.blue {
            background: #2cf;
            color: #fff;
          }

          h3.pink {
            background: #f96dd5;
            color: #fff;
          }


        h3.blue, h3.pink
        {         
            text-shadow: 1px 1px black, -1px -1px black, -1px 1px black,
              1px -1px black;

            font-size: 25px;
            padding-left: 5px;
            padding-top: 5px;
            letter-spacing: 0.1em;
          }

          @media (min-width: 600px) {
            h3 {
              margin: 8px 0px 0px 0px !important;
            }
          }
          @media (max-width: 600px) {
             {
              margin: 5px 4px 2px 5px !important;
            }
          }
        `}
      </style>
    </>
  );
}
