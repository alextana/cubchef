import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import GenericPill from 'components/Buttons/Pills/GenericPill/GenericPill'
import { useRouter } from 'next/router'
import { useAuth } from '../../lib/auth.js'
import { useCookies } from 'react-cookie'
import jwt_decode from 'jwt-decode'

Profile.propTypes = {
  extraClass: propTypes.string,
}

export default function Profile({ extraClass = '' }) {
  const [cookies] = useCookies(['user'])
  const [userData, setUserData] = useState(null)
  const greetings = [
    'Hello',
    'Hi',
    'Hey',
    'Howdy',
    'Greetings',
    'Ahoy',
    'Ciao',
    'Salut',
    'Hallo',
    'Hola',
    'Bonjour',
    'Konnichiwa',
    'Olá',
  ]
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
    <div className={`${extraClass} flex items-center gap-3`}>
      {isSignedIn() ? (
        <>
          {greetings[Math.floor(Math.random(greetings) * greetings.length)]}{' '}
          {userData?.username || ''}
          <GenericPill extraClass="cursor-pointer" onClick={logOut}>
            {' '}
            Logout
          </GenericPill>
        </>
      ) : (
        <>
          <GenericPill
            extraClass={`${
              router.pathname === '/register' ? 'bg-primary text-white' : ''
            }`}
          >
            <a href="/register">Register</a>
          </GenericPill>
          <GenericPill
            extraClass={`${
              router.pathname === '/login' ? 'bg-primary text-white' : ''
            }`}
          >
            <a href="/login">Login</a>
          </GenericPill>
        </>
      )}
    </div>
  )
}
