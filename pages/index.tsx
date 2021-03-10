import dynamic from 'next/dynamic'
import { Box, Grid, Typography } from '@material-ui/core'
import { Divider, Layout } from '../src/elements'
import { SocialLinks } from '../src/components'

const BannerWithNoSSR = dynamic(() => import('../src/components/Banner'), {
  ssr: false,
})

export default function Index() {
  return (
    <Layout>
      <BannerWithNoSSR />
      <Box pb={10}>
        <Grid container alignItems="center">
          <Grid item xl lg md sm xs={12}>
            <Typography variant="h2">Who I am</Typography>
          </Grid>
          <Grid item>
            <SocialLinks />
          </Grid>
        </Grid>
        <Divider />
        <Typography color="textSecondary" paragraph>
          Hi! My name is Takuya Hirata and I am a motivated software engineer
          based in Toronto. Currently working at 3merge as a Frontend Developer.
        </Typography>
        <Typography color="textSecondary" paragraph>
          Outside of work, I maintain a couple of small packages which help me
          write functional code. I have been working on that application. It
          allows developers to make notes and cheatsheets.
        </Typography>
        <Typography color="textSecondary" paragraph>
          Other than coding, I like to spend my time with my lovely dog Charlie.
          Playing baseball and video games.
        </Typography>
      </Box>
      <Box pb={10}>
        <Typography variant="h2">Liks to some of my works</Typography>
        <Divider />
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/fp-utils-types">
              <Typography color="textSecondary" variant="body1">
                Fp-utils-types
              </Typography>
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/fts-utils">
              <Typography color="textSecondary" variant="body1">
                Ftp-utils
              </Typography>
            </a>
          </li>
        </ul>
      </Box>
    </Layout>
  )
}
