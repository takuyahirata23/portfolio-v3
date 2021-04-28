import React from 'react'
import type { O } from '../utils/types'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { identity } from 'ramda'

const dv = {
  message: '',
  data: null,
}

type Status = 'idle' | 'fetching' | 'success' | 'error'

export default function useSubmit(submitF: () => any) {
  const [status, setStatus] = React.useState<Status>('idle')
  const [res, setRes] = React.useState(dv)

  const updateState = ({ data: { message, error, data = null } }: O) => {
    setTimeout(() => setRes(dv), 5000)
    setStatus(error ? 'error' : 'success')
    setRes({
      message,
      data,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    pipe(
      submitF(),
      E.fold(identity, (te: () => Promise<any>) => {
        setStatus('fetching')
        te()
          .then(E.fold(updateState, updateState))
          .finally(() => setTimeout(() => setStatus('idle'), 3000))
      })
    )
  }

  return {
    status,
    handleSubmit,
    ...res,
  }
}
