import makeStyles from '@material-ui/core/styles/makeStyles'

type Args = {
  height: number
}

export default makeStyles(({ breakpoints, typography }) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: ({ height }: Args) => ({
    height: height || '100vh',
    position: 'relative',
  }),
  underlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  profileWrapper: {
    flexDirection: 'column',
    position: 'relative',
  },
  name: {
    lineHeight: 1.2,
    fontWeight: typography.fontWeightLight,
  },
  h1Wrapper: {
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    flexDirection: 'column',
    [breakpoints.up('md')]: {
      top: 120,
    },
    [breakpoints.up('lg')]: {
      top: 150,
    },
  },
}))
