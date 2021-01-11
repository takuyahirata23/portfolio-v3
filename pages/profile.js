import { useState } from 'react'
import { Grid, Tab, Tabs, Typography } from '@material-ui/core'
import { Divider, Layout } from '../src/elements'
import { SocialLinks } from '../src/components'

export default function Profile() {
  const [tab, setTab] = useState(0)
  const handleTabChange = (e, val) => setTab(val)

  return (
    <Layout withHeader py>
      <Grid container alignItems="center">
        <Grid item xl lg md sm xs={12}>
          <Typography variant="h2">Takuya Hirata</Typography>
        </Grid>
        <Grid item>
          <SocialLinks />
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="h3">Who am I</Typography>
      <Typography color="textSecondary" paragraph>
        Motivated software engineer based in Toronto. Currently working at
        3merge. <br />
        Published npm package called "fp-utils-types" that help me to write
        functional code.
      </Typography>
      <Typography variant="h3">What I do for a living</Typography>
      <Typography color="textSecondary" paragraph>
        I build things on the internet. I like to write functional code because
        it is easier to test and debug.
      </Typography>
      <Typography variant="h3">What I do for fun</Typography>
      <Typography color="textSecondary" paragraph>
        I like playing video games and playing baseball. I have been learning
        Swift.
      </Typography>
    </Layout>
  )
}
