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
            color: #111;
            border-top: 3px solid #000;
            border-left: 2px solid #333;
            border-right: 2px solid #333;
          }

          .content p {
            padding: 8px 12px;
          }
          .content p b {
            color: #000;
          }

          .content ul
          {
            padding: 0px 0px 10px 0px;
          }
          .content ul > li {
            margin: 0px 0px 0px 20px;
            list-style: none;
            padding: 2px 0px;
          }
        
          @media (min-width: 600px) {
            .content {
              padding: 10px;
              font-size: 11pt;
            }

            .content p,
            .content ul li {
              font-size: 14px;              
            }
          }

          /* --- NARROW  ---------------*/
          @media (max-width: 600px) {
            .content {
              padding: 3px;
              font-size: 10px;
            }

            .content p,
            .content ul li {
              font-size: 14px;
              padding: 4px;
            }
          }
        `}
      </style>
    </>
  );
}
