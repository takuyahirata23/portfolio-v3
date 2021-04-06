import dynamic from 'next/dynamic'
import { Layout } from '../src/elements'
import { Profile } from '../src/components'

const BannerWithNoSSR = dynamic(() => import('../src/components/Banner'), {
  ssr: false,
})

export default function Index() {
  return (
    <Layout>
      <BannerWithNoSSR />
      <Profile />
    </Layout>
  )
}
