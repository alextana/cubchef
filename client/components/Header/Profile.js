import propTypes from 'prop-types'
import Link from 'next/link'

Profile.propTypes = {
  extraClass: propTypes.string,
}

export default function Profile({ extraClass = '' }) {
  return (
    <div className={`${extraClass} flex gap-3`}>
      <Link href="/register">Register</Link>
      <Link href="/register">Login</Link>
    </div>
  )
}
