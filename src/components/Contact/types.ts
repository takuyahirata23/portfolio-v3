export type Field = {
  value: any
  error: boolean
  helperText: string
}

export type Fields = {
  [key: string]: Field
}

export type Email = {
  name: string
  subject: string
  email: string
  message: string
}
