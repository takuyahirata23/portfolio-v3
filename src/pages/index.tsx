import { Layout } from '../elements'
import { Banner, Profile, Contact } from '../components'
import { O } from '../utils/types'

export default function Index({ toggleTheme }: O) {
  return (
    <Layout toggleTheme={toggleTheme}>
      <Banner />
      <Profile />
      <Contact />
    </Layout>
  )
}
