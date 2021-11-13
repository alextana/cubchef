import { useFormik } from 'formik'
import Input from '../Forms/Input'
import Button from '../Button/Button'
import React from 'react'
import Link from 'next/link'
import FormError from '../forms/errors/FormError'

function RegisterForm() {
  const validate = (values) => {
    const errors = {}
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
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      console.log(formik.errors)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <Button classType="primary" type="submit" extraClass="mt-4">
        Submit
      </Button>
      <p className="text-sm font-bold text-gray-800 mt-3">
        Already a member?{' '}
        <Link href="/login">
          <a className="underline font-extrabold hover:text-yellow-500">
            Login
          </a>
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm
