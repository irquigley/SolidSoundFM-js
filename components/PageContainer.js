import Link from "next/link";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import GoogleAnalytics from "./scripts/googleanalytics";

export default function PageContainer({ title, children }) {
  return (
    <>
      <Header title={title} />
      <div className="content">{children}</div>
      <Footer />
      <GoogleAnalytics />
      <style jsx global>
        {`
          .content {
            background: #fff;
            color: #000;
            border-top: 3px solid #000;
            border-left: 2px solid #333;
            border-right: 2px solid #333;
          }
          .content h2 {
            color: #fff;
            background: #ffe773;
            border-bottom: 2px solid #ff5500;
            text-shadow: 3px 3px 2px#000000c0, -1px -1px black, -1px 1px black,
              1px -1px black;
          }

          .content h3 {
            color: #0b5489;
            border-bottom: 1px solid #eee;
            background: rgba(70, 70, 70, 0.4);
          }

          .content p b {
            color: #000;
          }

          .content ul > li {
            margin: 4px 0px 4px 20px;
          }
          .content ol > li {
            margin: 4px 0px 14px 20px;
          }

          @media (min-width: 600px) {
            .content {
              padding: 10px;
              font-size: 11pt;
            }

            .content h3 {
              font-size: 25px;
              padding-left: 5px;
              margin: 8px 0px 0px 0px !important;
            }

            .content p,
            .content ul li {
              font-size: 14px;
              padding: 10px;
            }

            .content h2 {
              font-size: 45px;
              padding-left: 5px;
              letter-spacing: 0.07em;
            }
          }

          /* --- NARROW  ---------------*/
          @media (max-width: 600px) {
            .content {
              padding: 3px;
              font-size: 10px;
            }

            .content h3 {
              font-size: 25px;
              padding-left: 5px;
              margin: 5px 4px 0px 5px !important;
            }

            .content p,
            .content ul li {
              font-size: 14px;
              padding: 4px;
            }

            .content h2 {
              font-size: 45px;
              letter-spacing: 0.07em;
            }
          }
        `}
      </style>
    </>
  );
}
