import Header from "./Header";
import Footer from "./Footer";
import GoogleAnalytics from "./scripts/googleanalytics";

export default function PageContainer({ title, link, children }) {
  return (
    <>
      <Header title={title} link={link} />
      <div className="content">{children}</div>
      <Footer />
      <GoogleAnalytics />
     </>
  );
}
