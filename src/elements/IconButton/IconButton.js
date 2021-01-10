import { default as MaterialIconButton } from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'

export default function IconButton({ Icon, onClick }) {
  return (
    <MaterialIconButton onClick={onClick}>
      <Icon />
    </MaterialIconButton>
  )
}

IconButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
}
