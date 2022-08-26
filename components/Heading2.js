export default function Heading2({ children }) {
  return (
    <>
      <h3>{children}</h3>
      <style jsx global>
        {`
          h3 {
            background: #2cf;
            color: #fff;
            text-shadow: 1px 1px black, -1px -1px black, -1px 1px black,
              1px -1px black;
          }
        `}
      </style>
    </>
  );
}
