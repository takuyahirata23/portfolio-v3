import { prop } from 'ramda'
import * as IO from 'fp-ts/IO'
import { flow } from 'fp-ts/function'

export const classNames = (...args: string[]): string => args.join(' ')

// getHeightIO:: window => IO(window) => number
// @ts-ignore
export const getHeightIO = flow(IO.of, IO.map(prop('innerHeight')))

// getScrollY: window => IO(window) => number
// @ts-ignore
export const getScrollY = flow(IO.of, IO.map(prop('scrollY')))

export const scroll = (height: number): (() => void) => () =>
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  })
