import Link from 'next/link'
import styles from './Logo.module.css'
import propTypes from 'prop-types'

Logo.propTypes = {
  extraClass: propTypes.string,
}

function Logo({ extraClass = '' }) {
  return (
    <Link href="/">
      <div
        className={`transition-all text-3xl text-yellow-500 ${styles.logo} transform hover:scale-105 cursor-pointer ${extraClass}`}
      >
        cubchef
      </div>
    </Link>
  )
}

export default Logo
