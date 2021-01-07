import { IO } from 'fp-utils-types'

export const classNames = (...args) => args.join(' ')

// updateHeight:: (a -> _) -> IO b
export const updateHeightIO = setState =>
  IO.of(window).map(w => setState(w.innerHeight))
