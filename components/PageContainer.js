import Link from 'next/link'
import Header from './Header'

export default function PageContainer({title, content}) {
  return (
    <>
    <Header />
    {content}
    </>
     <div className="footer">
        Copyright 2013-2022. SolidSoundFM.
    </div>
  )
}
