import propTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

Profile.propTypes = {
  extraClass: propTypes.string,
}

export default function Profile({ extraClass = '' }) {
  const router = useRouter()
  return (
    <div className={`${extraClass} flex gap-3`}>
      <Link href="/register">
        <a
          className={`${
            router.pathname === '/register'
              ? 'border-b-2 border-yellow-500'
              : ''
          }`}
          href="/register"
        >
          Register
        </a>
      </Link>
      <Link href="/login">
        <a
          href="/login"
          className={`${
            router.pathname === '/login' ? 'border-b-2 border-yellow-500' : ''
          }`}
        >
          Login
        </a>
      </Link>
    </div>
  )
}
