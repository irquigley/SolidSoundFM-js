import Link from 'next/link'
import Script from 'next/script'
import Header from './Header'
import Footer from './Footer'
import GoogleAnalytics from './scripts/googleanalytics'

export default function PageContainer({title, children}) {
  return (
    <>
    <Header title={title}/>
    <div className="content">{children}</div> 
    <Footer />
    <GoogleAnalytics />    
    </>
  )
}
