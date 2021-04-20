import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints, spacing, palette, typography }) => ({
  container: {
    paddingTop: spacing(5),
  },
  imgWrapper: {
    width: 150,
    height: 150,
    margin: `0 auto`,
    marginBottom: spacing(4),
    overflow: 'hidden',
    borderRadius: '50%',
    border: `3px solid ${palette.primary.main}`,

    [breakpoints.up('md')]: {
      width: 180,
      height: 180,
    },
  },
  img: {
    objectFit: 'cover',
  },
  link: {
    color: palette.text.primary,
    fontWeight: typography.fontWeightBold,
  },
}))
