import React from 'react'
import { lensPath, set } from 'ramda'
import { validate as runValidation } from '../utils/validation'
import { O } from '../utils/types'

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

export default function useFields(iv: O) {
  const [fields, setFields] = React.useState<any>(() => toFieldShape(iv))

  const resetFields = () => setFields(toFieldShape(iv))

  const validate = () => {
    const res = runValidation(fields)
    setFields(res.fields)

    return res.isValid
  }

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFields(set(lensPath([name, 'value']), value, fields))

  return {
    fields,
    handleChange,
    validate,
    resetFields,
  }
}
