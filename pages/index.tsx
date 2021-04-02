import dynamic from 'next/dynamic'
import { Layout } from '../src/elements'

const BannerWithNoSSR = dynamic(() => import('../src/components/Banner'), {
  ssr: false,
})

export default function Index() {
  return (
    <Layout>
      <BannerWithNoSSR />
    </Layout>
  )
}
