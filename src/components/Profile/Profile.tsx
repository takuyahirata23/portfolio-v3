import Image from 'next/image'
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { Divider, Layout } from '../../elements'
import SocialLinks from '../SocialLinks'
import useStyles from './useStyles'

const align = (predicate: boolean): 'left' | 'center' =>
  predicate ? 'left' : 'center'

export default function Profile() {
  const cls = useStyles()
  const { breakpoints } = useTheme()
  const isGreaterThanSm = useMediaQuery(breakpoints.up('md'))
  const alignment = align(isGreaterThanSm)

  return (
    <Layout withHeader py>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={4} lg={4}>
          <Box className={cls.imgWrapper}>
            <Image
              src="/takuya.jpg"
              width={150}
              height={150}
              layout="responsive"
              alt="Takuya Hirata"
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
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
