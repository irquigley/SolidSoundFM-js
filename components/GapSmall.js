export default function GapSmall() {
  return (
    <>
      <div className="smallGap"></div>
      <style jsx global>
        {`
          @media (min-width: 600px) {
            .smallGap {
              margin-top: 14px;
            }
          }

          @media (max-width: 600px) {
            .smallGap {
              margin-top: 8px;
            }
          }
        `}
      </style>
    </>
  );
}
