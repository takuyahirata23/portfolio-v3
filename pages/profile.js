import { Grid, Typography } from '@material-ui/core'
import { Layout } from '../src/elements'

export default function Profile() {
  return (
    <Layout withHeader>
      <Grid container>
        <Grid item xl={6} lg={6}>
          <Typography variant="h2">Takuya Hirata</Typography>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Typography variant="body1">
            Software engineer, working at 3merge, and author of "fp-utils-types"
            package.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}
