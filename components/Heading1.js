export default function Heading1({ children }) {
  return (
    <>
      <h2>{children}</h2>
      <style jsx global>
        {`
          h2 {
            padding-left: 5px;
            letter-spacing: 0.07em;

            color: #fff;
            background: #ffe773;
            border-bottom: 2px solid #ff5500;
          }

          @media (min-width: 600px) {
            h2 {
              font-size: 45px;
              letter-spacing: 0.07em;
              text-shadow: 3px 3px 2px#000000c0, -1px -1px black, -1px 1px black,
                1px -1px black;
            }
          }

          @media (max-width: 600px) {
            h2 {
              font-size: 30px;
              letter-spacing: 0.07em;
              text-shadow: 2px 1px 2px#000000c0, -1px -1px black, -1px 1px black,
                1px -1px black;
            }
          }
        `}
      </style>
    </>
  );
}
