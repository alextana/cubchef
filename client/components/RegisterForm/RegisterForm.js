import { useFormik } from 'formik'
import Input from '../Forms/Input'
import Button from '../Buttons/Button/Button'
import React, { useState } from 'react'
import Link from 'next/link'
import FormError from '../forms/errors/FormError'
import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`

function RegisterForm() {
  const [register, { data, error, loading }] = useMutation(REGISTER, {
    errorPolicy: 'all',
  })
  const handleSuccess = (data) => {
    // TODO send notification of success then redirect to homepage
    console.log(data)
  }
  const handleError = (error) => {
    // TODO send notification of error
    console.log(error)
  }
  const validate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Username is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    return errors
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      confirmPassword: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      register({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
      }).then(
        (res) => handleSuccess(res),
        (err) => handleError(err)
      )
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Username"
        htmlFor="username"
        id="username"
        inputName="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeHolder="Enter your username"
        extraClass="w-full"
      />
      {formik.errors.username ? (
        <FormError>{formik.errors.username}</FormError>
      ) : null}
      <Input
        label="Email Address"
        htmlFor="email"
        id="email"
        inputName="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeHolder="Enter your email"
        extraClass="w-full"
      />
      {formik.errors.email ? (
        <FormError>{formik.errors.email}</FormError>
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
      <Input
        label="Confirm Password"
        htmlFor="confirmPassword"
        id="confirmPassword"
        inputName="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        placeHolder="Confirm your password"
        extraClass="w-full"
      />
      {formik.errors.confirmPassword ? (
        <FormError>{formik.errors.confirmPassword}</FormError>
      ) : null}

      {error?.graphQLErrors?.map(({ message }, i) => (
        <span key={i}>
          <FormError>{message}</FormError>
        </span>
      ))}

      <Button classType="primary" type="submit" extraClass="mt-4">
        Submit
      </Button>
      <p className="text-sm font-bold text-gray-800 mt-3">
        Already a member?{' '}
        <Link href="/login">
          <a className="underline font-extrabold hover:text-primary">Login</a>
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm
