import Link from "next/link";
import Head from "next/head";

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Solid Sound FM" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/site/main.css" rel="stylesheet" key="maincss" />
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
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="kushti">
                  <a>KUSHTI</a>
                </Link>
              </li>
              <li>
                <Link href="interviews">
                  <a>TALKING TUNES</a>
                </Link>
              </li>
              <li>
                <Link href="guestmixes">
                  <a>GUEST MIX</a>
                </Link>
              </li>
              <li>
                <Link href="hard_rave">
                  <a>FREE TUNES</a>
                </Link>
              </li>
              <li>
                <Link href="newreleases">
                  <a>MUSIC REVIEW</a>
                </Link>
              </li>
              <li>
                <Link href="stuff">
                  <a>STUFF</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* --- Header & Menu ------------------*/
        .header h1 span {
          display: none;
        }

        .header-wrap {
          background: #00000040;
        }

        .menu ul {
          display: block;
          list-style-type: none;
        }

        .menu ul li {
          position: relative;
          display: inline-block;
          margin: 2px;
        }

        .menu ul li a {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          text-decoration: none;
          padding-top: 5px;
          color: #000;
          background: #00b3e9;
        }

        .menu ul li a:hover {
          background: #fff;
          color: #000;
        }

        /* WIDE settings */
        @media (min-width: 600px) {
          .header-wrap {
            margin-top: 20px;
          }

          .header {
            padding-top: 18px;
            background: url("/site/solid-sound.png") no-repeat center 10px;
          }

          .header h1 {
            height: 115px;
          }

          .header .menu {
            text-align: center;
          }

          .menu ul li {
            width: 120px;
            height: 36px;
            font-size: 11pt;
          }
        }

        /* NARROW Settings */
        @media (max-width: 600px) {
          .header {
            background: url("/site/solid-sound.png") 0px 5px / 300px 58px
              no-repeat;
            height: 110px;
          }

          .header .menu {
            position: absolute;
            top: 66px;
          }

          .menu ul li {
            width: 45px;
            height: 34px;
            font-size: 10px;
          }

          .menu ul li a {
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
}
