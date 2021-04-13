import React from 'react'
import type { O } from '../utils/types'

type Dv = {
  error: boolean
  message: string
  data: any
}

const dv = {
  error: false,
  message: '',
  data: null,
}

export default function useSubmit(submitF) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [res, setRes] = React.useState(dv)

  const updateState = ({ message, error, data = null }) => {
    setRes({
      message,
      error,
      data,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const fn = submitF()

    if (fn) {
      setIsLoading(true)
      fn()
        .then((res: O) => res.json())
        .then(updateState)
        .catch(updateState)
        .finally(() => {
          setTimeout(() => setRes(dv), 3000)
          setIsLoading(false)
        })
    }
  }

  return {
    isLoading,
    handleSubmit,
    ...res,
  }
}
