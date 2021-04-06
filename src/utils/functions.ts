import { prop } from 'ramda'
import { compose, not } from 'ramda'

export const classNames = (...args: string[]): string => args.join(' ')

export const toBoolean = (x: any): boolean => Boolean(x)

export const getHeightIO = prop('innerHeight')

//@ts-ignore
export const isScrollYZero = compose(not, toBoolean, prop('scrollY'))

export const scroll = (height: number): (() => void) => () =>
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  })
