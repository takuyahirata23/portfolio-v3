import { Grid, Typography } from '@material-ui/core'
import { Divider, Layout } from '../src/elements'

export default function Profile() {
  return (
    <Layout withHeader py>
      <Typography variant="h2">Takuya Hirata</Typography>
      <Divider />
      <Typography color="textSecondary" paragraph>
        I am a motivated software engineer. This is my portfolio site and
        playground where I try new things and practice.
      </Typography>
      <Typography color="textSecondary" paragraph>
        I mostly work with React and Gatsby to build web applications. I have a
        passion for expanding my functional programming knowledge.
      </Typography>
      <Typography color="textSecondary" paragraph>
        Currently, I enjoy learning Swift and backend development.
      </Typography>
    </Layout>
  )
}
