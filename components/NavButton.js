import Link from 'next/link'

export default function NavButton({title, link}) {
  return (
    <Link href={link}>
        <a>{title}</a>
    </Link>
  )
}
