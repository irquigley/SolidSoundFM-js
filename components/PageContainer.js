import Link from 'next/link'
import Script from 'next/script'
import Header from './Header'
import GoogleAnalytics from './scripts/GoogleAnalytics'

export default function PageContainer({title, children}) {
  return (
    <>
    <Header title={title}/>
    <div>{children}</div>
     <div className="footer">
        Copyright 2013-{new Date().getFullYear()}. SolidSoundFM.
    </div>
    <GoogleAnalytics />    
    </>
  )
}
