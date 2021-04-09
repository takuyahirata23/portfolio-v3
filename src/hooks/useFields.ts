import React from 'react'
import { compose, lensProp, set } from 'ramda'
import { validate as runValidation } from '../utils/validation'
import { O, R } from '../utils/types'

type Field = {
  value: any
  error: boolean
  helperText: string
}

type Fields = {
  [key: string]: Field
}

export const toFieldShape = (iv: O): Fields =>
  Object.entries(iv).reduce(
    (acc, [key, value]) =>
      Object.assign(acc, { [key]: { value, error: false, helperText: ' ' } }),
    {}
  )

const commonLensPaths: R = {
  value: lensProp('value'),
  helperText: lensProp('helperText'),
  error: lensProp('error'),
}

const createLens = (iv: O) =>
  Object.keys(iv).reduce(
    (acc, x) => Object.assign(acc, { [x]: lensProp(x) }),
    commonLensPaths
  )

export default function useFields(iv: O) {
  const [fields, setFields] = React.useState<any>(() => toFieldShape(iv))
  const L: R = createLens(iv)

  const resetFields = () => setFields(toFieldShape(iv))

  const validate = () => {
    const res = runValidation(fields)
    setFields(res.fields)

    return res.isValid
  }

  const getNestedLens = (key: string): any => compose(L[key], L.value)

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFields(set(getNestedLens(name), value, fields))

  return {
    fields,
    handleChange,
    validate,
    resetFields,
  }
}
