import PropTypes from 'prop-types'

export default function withList(Component) {
  function withListInner({ LABEL, URL }) {
    return (
      <li key={LABEL}>
        <Component LABEL={LABEL} URL={URL} />
      </li>
    )
  }

  withListInner.PropTypes = {
    LABEL: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }

  return withListInner
}
