import { compose, not, prop, toUpper } from 'ramda'

export const classNames = (...args: string[]): string => args.join(' ')

export const toBoolean = (x: any): boolean => Boolean(x)

export const getHeight = prop('innerHeight')

export const getDate = () =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date())

export const toLabel = (str: string): string =>
  toUpper(str.charAt(0)).concat(str.slice(1))

export const isScrollYZero: (x: any) => boolean = compose(
  not,
  toBoolean,
  prop('scrollY')
)

export const scroll = (height: number): (() => void) => () =>
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  })
