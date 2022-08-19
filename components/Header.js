import Link from 'next/Link'

export default function Header() {
  return (    
     <div className="header-wrap">
          <div className="header">
                  <h1><span>Solid Sound</span></h1>
                  <div className="menu">
                      <ul>
                          <li><Link href="/">HOME</Link></li>
                          <li><Link  href="kushti">KUSHTI</Link></li>
                          <li><Link  href="interviews">TALKING TUNES</Link></li>
                          <li><Link  href="guestmixes">GUEST MIX</Link></li>
                          <li><Link  href="hard_rave">FREE TUNES</Link></li>
                          <li><Link  href="newreleases">MUSIC REVIEW</Link></li>
                          <li><Link  href="faq">FAQ</Link></li>
                      </ul>
                  </div>
            </div>
      </div>
  )
}
