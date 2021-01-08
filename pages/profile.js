import { Grid, Typography } from '@material-ui/core'
import { Layout } from '../src/elements'

export default function Profile() {
  return (
    <Layout withHeader py>
      <Typography variant="h2" gutterBottom>
        Takuya Hirata
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        I am a motivated software engineer. This is my portfolio site and
        playground where I try new things and practice.
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        I mostly work with React and Gatsby to build web applications. I have a
        passion for expanding my functional programming knowledge.
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Currently, I enjoy learning Swift and backend development.
      </Typography>
    </Layout>
  )
}
