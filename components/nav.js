import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/' legacyBehavior>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' legacyBehavior>
            About
          </Link>
        </li>
        <li>
          <Link href='/blog' legacyBehavior>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
