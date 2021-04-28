import { makeStyles } from '@material-ui/core'

type Args = {
  isTop: boolean
}

export default makeStyles(() => ({
  header: ({ isTop }: Args) => ({
    display: isTop ? 'flex' : 'none',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  }),
}))
