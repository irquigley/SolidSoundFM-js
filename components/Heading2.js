export default function Heading2({ children }) {
  return (
    <>
      <h3 className="blue">{children}</h3>
      <style global>
        {`
          h3.blue {
            background: #2cf;
            color: #fff;
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
              margin: 5px 4px 0px 5px !important;
            }
          }
        `}
      </style>
    </>
  );
}
