import React, { useState, useContext, createContext } from 'react'
import { useCookies } from "react-cookie"
import Router from 'next/router'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from '@apollo/client'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null)
  const [cookie, setCookie, removeCookie] = useCookies(['user'])

  const isSignedIn = () => {
    if (!authToken && cookie) {
      setAuthToken(cookie.user)
    }

    if (authToken) {
      return true
    } else {
      return false
    }
  }

  const getToken = () => {
    if (!authToken) {
      return
    }
    return authToken
  }

  const getAuthHeaders = () => {
    if (!authToken && !cookie) return null

    if (!authToken && cookie) {
      return {
        Authorization: `Bearer ${cookie.user}`,
      }
    }
    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: 'http://localhost:6600/graphql',
      headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const logIn = async ({ username, password }) => {
    const client = createApolloClient()
    const LoginMutation = gql`
      mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          token
          username
          email
        }
      }
    `

    const result = await client.mutate({
      mutation: LoginMutation,
      errorPolicy: 'all',
      variables: { username, password },
    })

    if (result?.errors?.length) {
      return result.errors
    }

    const data = result.data


    if (result?.data?.login?.token) {
      setAuthToken(data.login.token)
      setCookie('user', JSON.stringify(data.login.token), {
        path: '/',
        maxAge: 3600,
        sameSite: true,
      })
      Router.push('/')
      // TODO - add notification dispatch saying login outcome
      // TODO - add cookie to make auth persistent
    }
  }

  const logOut = () => {
    removeCookie('user')
    setAuthToken(null)
    Router.push('/')
    // TODO - add notification dispatch saying logout outcome
  }

  return {
    setAuthToken,
    isSignedIn,
    getToken,
    logIn,
    logOut,
    createApolloClient,
  }
}
