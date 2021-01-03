import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Header } from '../../components'
import useStyles from './useStyles'

const Layout = ({ children, withHeader }) => {
  const cls = useStyles({ withHeader })
  return (
    <Box className={cls.root}>
      <Header />
      <Box className={cls.container}>{children}</Box>
    </Box>
  )
}

Layout.defaultProps = {
  withHeader: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool,
}

export default Layout
