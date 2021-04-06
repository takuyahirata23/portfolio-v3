import React from 'react'

type InitialValues = {
  [key: string]: any
}

export default function useFields(iv: InitialValues) {
  const [fields, setFields] = React.useState(iv)

  const resetFields = () => setFields(iv)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields(Object.assign({}, fields, { [e.target.name]: e.target.value }))

  return {
    fields,
    handleChange,
    resetFields,
  }
}
