import React from 'react'
import type { O } from '../utils/types'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { identity } from 'ramda'

const dv = {
  error: false,
  message: '',
  data: null,
}

export default function useSubmit(submitF: () => any) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [res, setRes] = React.useState(dv)

  const updateState = ({ data: { message, error, data = null } }: O) => {
    setTimeout(() => setRes(dv), 3000)
    setIsLoading(false)
    setRes({
      message,
      error,
      data,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    pipe(
      submitF(),
      E.fold(identity, (te: () => Promise<any>) => {
        setIsLoading(true)
        te().then(E.fold(updateState, updateState))
      })
    )
  }

  return {
    isLoading,
    handleSubmit,
    ...res,
  }
}
