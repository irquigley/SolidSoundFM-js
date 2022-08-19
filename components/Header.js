import Link from 'next/link'

export default function Header() {
  return (    
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
  )
}
