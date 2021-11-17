import propTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../lib/auth.js'
import client from 'apollo-client.js'
import { gql, useQuery } from '@apollo/client'

Profile.propTypes = {
  extraClass: propTypes.string,
}

export default function Profile({ extraClass = '', user }) {
  const router = useRouter()
  const { isSignedIn, logOut } = useAuth()

  return (
    <div className={`${extraClass} flex gap-3`}>
    {isSignedIn() ? (
        <>
          Hi, name -
          <span className="hover:border-b-2 hover:border-yellow-500 cursor-pointer" onClick={logOut}> Logout</span>
        </>
        ) : (
          <>
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
          </>
      )}
    </div>
  )
}