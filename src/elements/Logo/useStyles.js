import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette }) => ({
  '@keyframes drewAnimation': {
    to: {
      strokeDashoffset: 0,
    },
  },
  wrapper: {
    width: '3rem',
    height: '3rem',
  },
  logoBase: {
    stroke: palette.text.primary,
    strokeWidth: 3.5,
    fill: 'none',
  },
  left: {
    strokeDasharray: '521.4798583984375',
    strokeDashoffset: '521.4798583984375',
    animation: `$drewAnimation 3s linear forwards`,
  },
  right: {
    strokeDasharray: '716.0350341796875',
    strokeDashoffset: '716.0350341796875',
    animation: `$drewAnimation 3s linear forwards`,
  },
}))
