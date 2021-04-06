import { prop } from 'ramda'
import * as IO from 'fp-ts/IO'
import { flow } from 'fp-ts/function'
import { compose, not } from 'ramda'

export const classNames = (...args: string[]): string => args.join(' ')

export const toBoolean = (x: any): boolean => Boolean(x)

// getHeightIO:: window => IO(window) => number
// @ts-ignore
export const getHeightIO = flow(IO.of, IO.map(prop('innerHeight')))

//@ts-ignore
export const isScrollYZero = compose(not, toBoolean, prop('scrollY'))

export const scroll = (height: number): (() => void) => () =>
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  })
