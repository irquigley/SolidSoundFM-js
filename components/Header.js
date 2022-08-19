import Link from 'next/link'
import Head from 'next/head'

export default function Header({title}) {
  return (
     <>
     <Head>
        <title>{title}/title>
        <meta name="description" content="Solid Sound FM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <div className="header-wrap">
          <div className="header">
              <h1><span>Solid Sound</span></h1>
              <div className="menu">
                  <ul>
                      <li><Link href="/"><a>HOME</a></Link></li>
                      <li><Link href="kushti"><a>KUSHTI</a></Link></li>
                      <li><Link href="interviews"><a>TALKING TUNES</a></Link></li>
                      <li><Link href="guestmixes"><a>GUEST MIX</a></Link></li>
                      <li><Link href="hard_rave"><a>FREE TUNES</a></Link></li>
                      <li><Link href="newreleases"><a>MUSIC REVIEW</a></Link></li>
                      <li><Link href="faq"><a>FAQ</a></Link></li>
                  </ul>
              </div>
            </div>
      </div>
    </>
  )
}
