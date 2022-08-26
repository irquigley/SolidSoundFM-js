export default function GapMedium() {
  return (
    <>
      <div className="mediumGap"></div>
      <style jsx global>
        {`
          @media (min-width: 600px) {
            .mediumGap {
              margin-top: 30px;
            }
          }

          @media (max-width: 600px) {
            .mediumGap {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
