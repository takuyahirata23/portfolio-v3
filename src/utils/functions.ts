import { compose, props, head } from 'ramda'
import * as IO from 'fp-ts/IO'
import { pipe, flow } from 'fp-ts/function'

export const classNames = (...args: string[]): string => args.join(' ')

// getHeight:: _ -> IO b
// export const getHeightIO = () =>
//   IO.of(window).map(compose(head, props(['innerHeight'])))
//
// export const getHeightIO = window =>
//   pipe(IO.of(window), IO.map(compose(head, props(['innerHeight']))))
//
export const getHeightIO = flow(
  IO.of,
  IO.map(compose(head, props(['innerHeight'])))
)
