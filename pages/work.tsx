import { Typography } from '@material-ui/core'
import { Divider, Layout } from '../src/elements'

export default function Work() {
  return (
    <Layout withHeader py>
      <Typography variant="h2">Work</Typography>
      <Divider />
      <Typography color="textSecondary">
        There are some projects I have personally developed.
      </Typography>
    </Layout>
  )
}
