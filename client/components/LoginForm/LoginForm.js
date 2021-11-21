import React, { useState } from 'react';
import { useFormik } from 'formik'
import { useAuth } from '../../lib/auth.js'
import Input from '../Forms/Input'
import Button from '../Button/Button'
import Link from 'next/link'
import FormError from '../forms/errors/FormError'

function LoginForm() {
  const [loginError, setError] = useState('')
  const { logIn } = useAuth()
  const validate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Username is required'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }

    return errors
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      const res = await logIn({ username: values.username, password: values.password })
      if (res?.length) {
        setError(res[0].message)
      } else {
        setError('')
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Username"
        htmlFor="username"
        id="username"
        inputName="username"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeHolder="Enter your username"
        extraClass="w-full"
      />
      {formik.errors.username ? (
        <FormError>{formik.errors.username}</FormError>
      ) : null}
      <Input
        label="Password"
        htmlFor="password"
        id="password"
        inputName="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeHolder="Enter your password"
        extraClass="w-full"
      />
      {formik.errors.password ? (
        <FormError>{formik.errors.password}</FormError>
      ) : null}

      {loginError !== '' ? (
        <FormError>{loginError}</FormError>
      ) : null}
      <Button classType="primary" type="submit" extraClass="mt-4">
        Submit
      </Button>
      <p className="text-sm font-bold text-gray-800 mt-3">
        Don't have an account? {' '}
        <Link href="/register">
          <a className="underline font-extrabold hover:text-primary">
            Register
          </a>
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
