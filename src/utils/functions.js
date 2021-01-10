import { props, head } from 'ramda'
import { compose, IO } from 'fp-utils-types'

export const classNames = (...args) => args.join(' ')

// getHeight:: _ -> IO b
export const getHeightIO = () =>
  IO.of(window).map(compose(head, props(['innerHeight'])))
