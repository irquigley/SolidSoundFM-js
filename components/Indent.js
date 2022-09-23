export default function Indent({ children }) {
  return (
    <>
      <p className="Indent">{children}</p>
      <style jsx global>
        {`
          @media (min-width: 600px) {
            .Indent {
              margin: 0px 10px 0px 10px;
            }
          }

          @media (max-width: 600px) {
            .Indent {
              margin: 0px 5px 0px 5px;
            }
          }
        `}
      </style>
    </>
  );
}