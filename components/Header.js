import Link from "next/link";
import Head from "next/head";

export default function Header({ title, link }) {
   
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Solid Sound FM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header-wrap">
        <div className="header">
          <h1>
            <span>Solid Sound</span>
          </h1>
          <div className="menu">
            <ul>
              <li>
                <Link href="/">                
                  <a><div className={link == "home" ? "active" : ""}>HOME</div></a>                  
                </Link>                
              </li>
              <li>
                <Link href="kushti">
                  <a><div className={link == "kushti" ? "active" : ""}>KUSHTI</div></a>
                </Link>
              </li>
              <li>
                <Link href="interviews">
                  <a><div className={link == "tt" ? "active" : ""}>TALKING TUNES</div></a>
                </Link>
              </li>
              <li>
                <Link href="guestmixes">
                  <a><div className={link == "mix" ? "active" : ""}>GUEST MIX</div></a>
                </Link>
              </li>
              <li>
                <Link href="hard_rave">
                  <a><div className={link == "hre" ? "active" : ""}>FREE TUNES</div></a>
                </Link>
              </li>
              <li>
                <Link href="newreleases">
                  <a><div className={link == "show" ? "active" : ""}>MUSIC REVIEW</div></a>
                </Link>
              </li>
         
            </ul>
          </div>
        </div>
      </div>      
    </>
  );
}
