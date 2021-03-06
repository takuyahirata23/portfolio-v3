import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyles from './useStyles'

interface Props {
  LABEL: string
  URL: string
}

export default function NavLink({ LABEL, URL }: Props) {
  const { asPath } = useRouter()
  const cls = useStyles({ isActive: asPath === URL })

  return (
    <Link href={URL}>
      <a className={cls.link}>{LABEL}</a>
    </Link>
  )
}
