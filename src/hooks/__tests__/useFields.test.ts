import { toFieldShape, validate } from '../useFields'

const value = {
  value: '',
  helperText: '',
  error: false,
}

describe('toFieldShape', () => {
  test('should transform arg to the shape', () => {
    const res = toFieldShape({ name: '', email: '' })
    expect(res).toEqual({
      name: value,
      email: value,
    })
  })
})

describe('validate', () => {
  test('should not validate when the validation method does not exist', () => {
    const res = validate(toFieldShape({ name: '' }))
    expect(res.isValid).toBe(true)
    expect(res.fields.name).toEqual({
      value: '',
      error: false,
      helperText: '',
    })
  })

  test('should validate if the validation method exists', () => {
    const res = validate(toFieldShape({ name: '', email: '' }))
    expect(res.isValid).toBe(false)
    expect(res.fields.email).toEqual({
      value: '',
      error: true,
      helperText: 'Please enter a valid email',
    })
  })
})
