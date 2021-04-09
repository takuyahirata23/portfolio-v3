import React from 'react'
import { compose, lensProp, over } from 'ramda'
import { Predicate } from 'fts-utils'

type InitialValues = {
  [key: string]: any
}

type Field = {
  value: any
  error: boolean
  helperText: string
}

type Fields = {
  [key: string]: Field
}

type R = Record<string, any>

/**
 * 1) transform to the proper shape
 * 2) update the handleChange so the shape doesn't break
 * 3) validate
 *
 * */

/**
 * 1)validate if validation method existso
 * 2)if error then return error and helperText
 * */

const hasValue = (x: string) => x.trim().length > 0

export const validations: R = {
  email: Predicate(hasValue),
}

export const toFieldShape = (iv: InitialValues): Fields =>
  Object.entries(iv).reduce(
    (acc, [key, value]) =>
      Object.assign(acc, { [key]: { value, error: false, helperText: '' } }),
    {}
  )

const commenLensPaths: R = {
  value: lensProp('value'),
  helperText: lensProp('helperText'),
  error: lensProp('error'),
}

export const createLens = (iv: InitialValues) =>
  Object.keys(iv).reduce(
    (acc, x) => Object.assign(acc, { [x]: lensProp(x) }),
    commenLensPaths
  )

export default function useFields(iv: InitialValues) {
  const [fields, setFields] = React.useState<any>(() => toFieldShape(iv))
  const L: R = createLens(iv)

  const resetFields = () => setFields(toFieldShape(iv))

  const getNestedLens = (key: string): any => compose(L[key], L.value)

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFields(over(getNestedLens(name), () => value, fields))

  return {
    fields,
    handleChange,
    validate: () => true,
    resetFields,
  }
}
