import Link from 'next/link'
import Script from 'next/script'
import Header from './Header'

export default function PageContainer({title, children}) {
  return (
    <>
    <Header title={title}/>
    <div>{children}</div>
     <div className="footer">
        Copyright 2013-{new Date().getFullYear()}. SolidSoundFM.
    </div>
    
    <Script> {
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-6713202-18']);
      _gaq.push(['_setDomainName', 'solidsound.fm']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })(); }
    </Script>
    </>
  )
}
