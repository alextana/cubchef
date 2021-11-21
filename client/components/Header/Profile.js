import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../lib/auth.js'
import { useCookies } from 'react-cookie'
import jwt_decode from 'jwt-decode'

Profile.propTypes = {
  extraClass: propTypes.string,
}

export default function Profile({ extraClass = '' }) {
  const [cookies] = useCookies(['user']);
  const [userData, setUserData] = useState(null)
  const router = useRouter()
  const { isSignedIn, logOut } = useAuth()
  const userCookie = cookies?.user

  if (userCookie) {
    const decodedUser = jwt_decode(userCookie)
    if (decodedUser) {
      useEffect(() => {
        setUserData(decodedUser)
      }, [])
    }
  }

  return (
    <div className={`${extraClass} flex gap-3`}>
      {isSignedIn() ? (
        <>
          Hello, {userData?.username || ''} -
          <span className="hover:border-b-2 hover:border-primary cursor-pointer" onClick={logOut}> Logout</span>
        </>
        ) : (
          <>
            <Link href="/register">
              <a
                className={`${
                  router.pathname === '/register'
                    ? 'border-b-2 border-primary'
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
                  router.pathname === '/login' ? 'border-b-2 border-primary' : ''
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