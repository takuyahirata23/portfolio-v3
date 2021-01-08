import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Header } from '../../components'
import useStyles from './useStyles'

const Layout = ({ children, withHeader, py }) => {
  const cls = useStyles({ withHeader })
  const padding = py ? [3, 5, 8, 10] : []
  return (
    <Box className={cls.root}>
      <Header />
      <Box className={cls.container} py={padding}>
        {children}
      </Box>
    </Box>
  )
}

Layout.defaultProps = {
  withHeader: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool,
  py: PropTypes.any,
}

export default Layout
