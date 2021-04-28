import { Layout } from '../elements'
import { Banner, Profile, Contact } from '../components'

export default function Index() {
  return (
    <Layout>
      <Banner />
      <Profile />
      <Contact />
    </Layout>
  )
}
