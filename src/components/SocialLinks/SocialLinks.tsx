import IconButton from '@material-ui/core/IconButton'
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons'

const links = [
  {
    url: 'https://github.com/Takuya-H23',
    Icon: GitHub,
  },
  {
    url: 'https://www.linkedin.com/in/takuya-hirata-1a6562169/',
    Icon: LinkedIn,
  },
  {
    url: 'https://twitter.com/takuya_js23',
    Icon: Twitter,
  },
]

export default function SocialLinks() {
  return (
    <>
      {links.map(({ url, Icon }) => (
        <a href={url} target="_blank" key={url}>
          <IconButton>
            <Icon />
          </IconButton>
        </a>
      ))}
    </>
  )
}
