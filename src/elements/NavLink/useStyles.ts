import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ palette }) => ({
  link: ({ isActive }) => ({
    display: 'block',
    padding: '.5rem',
    color: isActive ? palette.text.secondary : palette.text.primary,
    marginBottom: '.5rem',
  }),
}))
