import { Grid, Typography } from '@material-ui/core'
import { Divider, Layout } from '../src/elements'
import { SocialLinks } from '../src/components'

export default function Profile() {
  return (
    <Layout withHeader py>
      <Grid container alignItems="center">
        <Grid item xl lg md sm xs>
          <Typography variant="h2">Takuya Hirata</Typography>
        </Grid>
        <Grid item>
          <SocialLinks />
        </Grid>
      </Grid>
      <Divider />
      <Typography color="textSecondary" paragraph>
        I am a motivated software engineer based in Toronto. Currently working
        at 3merge as a frontend developer.
      </Typography>
    </Layout>
  )
}
