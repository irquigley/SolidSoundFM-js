export default function Footer() {
  return (
    <>
      <div className="footer">
        Copyright 2013-{new Date().getFullYear()}. SolidSoundFM.
      </div>
      <style jsx global>
        {`
          .footer {
            background: #3339;
            font-size: 12px;
            padding: 5px;
            color: #fff;
            height: 30px;
            text-align: right;
            border-top: 2px solid #000;
          }
        `}
      </style>
    </>
  );
}
