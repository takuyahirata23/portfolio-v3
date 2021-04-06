//import dynamic from 'next/dynamic'
import { Layout } from '../src/elements'
import { Banner, Profile, Contact } from '../src/components'

// const BannerWithNoSSR = dynamic(() => import('../src/components/Banner'), {
//   ssr: false,
// })

export default function Index() {
  return (
    <Layout>
      <Banner />
      <Profile />
      <Contact />
    </Layout>
  )
}
