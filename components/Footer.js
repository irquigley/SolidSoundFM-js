import Link from 'next/link'
import Image from 'next/image'

export default function Footer({title}) {
  return (
      <div className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a> -- Copyright 2013-{new Date().getFullYear()}. SolidSoundFM.
      </div>
  )
}
