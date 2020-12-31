import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import Header from '../Header'
import useStyles from './useStyles'

const Layout = ({ children }) => {
  const cls = useStyles()
  return (
    <Box className={cls.root}>
      <Header />
      <Box>{children}</Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
