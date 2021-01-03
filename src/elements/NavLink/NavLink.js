import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyles from './useStyles'

export default function NavLink({ LABEL, URL }) {
  const { asPath } = useRouter()
  const cls = useStyles({ isActive: asPath === URL })

  return (
    <Link href={URL}>
      <a className={cls.link}>{LABEL}</a>
    </Link>
  )
}

NavLink.propTypes = {
  LABEL: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
}
