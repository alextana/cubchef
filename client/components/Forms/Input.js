import React from 'react'
import propTypes from 'prop-types'

Input.propTypes = {
  htmlFor: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  inputName: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  extraClass: propTypes.string,
  placeHolder: propTypes.string,
}

function Input({
  htmlFor,
  label,
  id,
  type,
  inputName,
  onChange,
  value,
  extraClass,
  placeHolder,
}) {
  return (
    <>
      <label
        className={`block font-bold mt-2 text-gray-800 text-sm mb-1`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        className={`block px-4 py-2 border border-gray-300 rounded-xl mb-4  ${extraClass}`}
        type={type}
        id={id}
        name={inputName}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
      />
    </>
  )
}

export default Input
