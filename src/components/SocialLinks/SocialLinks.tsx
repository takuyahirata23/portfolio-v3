import IconButton from '@material-ui/core/IconButton'
import { GITHUB, LINKEDIN, TWITTER } from '../../utils/constants'

export default function SocialLinks() {
  return (
    <>
      {[GITHUB, LINKEDIN, TWITTER].map(({ URL, Icon }) => (
        <a href={URL} target="_blank" key={URL}>
          <IconButton>
            <Icon />
          </IconButton>
        </a>
      ))}
    </>
  )
}
