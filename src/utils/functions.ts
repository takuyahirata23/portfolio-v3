import { prop } from 'ramda'
import * as IO from 'fp-ts/IO'
import { flow } from 'fp-ts/function'

export const classNames = (...args: string[]): string => args.join(' ')

export const getHeightIO = flow(IO.of, IO.map(prop('innerHeight')))
