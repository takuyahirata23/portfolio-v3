import { compose, lensPath, over } from 'ramda'
import { Predicate } from 'fts-utils'
import { R } from './types'

const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const validations: R = {
  email: Predicate(isEmail),
}

export const updateField = ({
  key,
  fields,
}: {
  key: string
  fields: { isValid: boolean; fields: Fields }
}) =>
  compose(
    over(lensPath(['fields', key, 'error']), () => true),
    over(
      lensPath(['fields', key, 'helperText']),
      () => `Please enter a valid ${key}`
    )
  )(fields)

export const validate = (fields: Fields): O =>
  Object.entries(fields).reduce(
    (acc: any, [key, field]: [string, O]) => {
      const res = validations[key] ? validations[key].run(field.value) : true
      if (res) return acc

      return Object.assign(updateField({ key, fields: acc }), {
        isValid: false,
      })
    },
    {
      isValid: true,
      fields,
    }
  )
