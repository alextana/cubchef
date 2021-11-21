import Link from 'next/link'
import styles from './Logo.module.css'
import propTypes from 'prop-types'
import BearSvg from './BearSvg.js'

Logo.propTypes = {
  extraClass: propTypes.string,
}

function Logo({ extraClass = '' }) {
  return (
    <Link href="/">
      <div
        className={`flex gap-1 items-center transition-all text-3xl ${styles.logo} transform hover:scale-105 cursor-pointer ${extraClass}`}
      >
        <BearSvg widthClass="w-16" heightClass="h-16"/>
        cubchef
      </div>
    </Link>
  )
}

export default Logo
