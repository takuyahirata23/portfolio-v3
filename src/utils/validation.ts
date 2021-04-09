import { compose, lensPath, set, not, mergeRight } from 'ramda'
import { Predicate } from 'fts-utils'
import { R } from './types'

const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const validations: R = {
  email: Predicate(isEmail),
}

export const updateField = ({
  key,
  fields,
  status,
}: {
  key: string
  fields: { isValid: boolean; fields: Fields }
  status: boolean
}) =>
  compose(
    set(lensPath(['fields', key, 'error']), not(status)),
    set(
      lensPath(['fields', key, 'helperText']),
      status ? ' ' : `Please enter a valid ${key}`
    )
  )(fields)

export const validate = (fields: Fields): O =>
  Object.entries(fields).reduce(
    (acc: any, [key, field]: [string, O]) => {
      const status = validations[key] ? validations[key].run(field.value) : true

      return status
        ? updateField({ key, fields: acc, status })
        : mergeRight(updateField({ key, fields: acc, status }), {
            isValid: false,
          })
    },
    {
      isValid: true,
      fields,
    }
  )
