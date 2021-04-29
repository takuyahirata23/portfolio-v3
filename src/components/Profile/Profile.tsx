import Image from 'next/image'
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import SocialLinks from '../SocialLinks'
import useStyles from './useStyles'
import { GITHUB, NPM } from '../../utils/constants'

const align = (predicate: boolean): 'left' | 'center' =>
  predicate ? 'left' : 'center'

export default function Profile() {
  const cls = useStyles()
  const { breakpoints } = useTheme()
  const isGreaterThanSm = useMediaQuery(breakpoints.up('md'))
  const alignment = align(isGreaterThanSm)

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={cls.container}
    >
      <Grid item xs={12} md={4} lg={4}>
        <Box className={cls.imgWrapper}>
          <Image
            src="/takuya.jpg"
            width={150}
            height={150}
            layout="responsive"
            alt="Takuya Hirata"
            className={cls.img}
          />
        </Box>
      </Grid>
      <Grid container item alignItems="center" xs={12} md lg xl>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" align={alignment} gutterBottom>
            Takuya Hirata
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <SocialLinks />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" paragraph align={alignment}>
            Motivated software engineer based in Toronto. <br />
            Feel free to check my{' '}
            <a href={GITHUB.URL} target="_blank" className={cls.link}>
              {GITHUB.LABEL}
            </a>{' '}
            or{' '}
            <a href={NPM.URL} target="_blank" className={cls.link}>
              {NPM.LABEL}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
