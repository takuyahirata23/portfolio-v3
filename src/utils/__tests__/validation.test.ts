import { validate } from '../validation'

const iv = {
  value: '',
  helperText: ' ',
  error: false,
}

const stub = (obj: {}) => Object.assign(iv, obj)

describe('validate', () => {
  test('should not validate when the validation method does not exist', () => {
    const res = validate({ name: stub(iv) })

    expect(res.isValid).toBe(true)
    expect(res.fields.name).toEqual({
      value: '',
      error: false,
      helperText: ' ',
    })
  })

  test('should return false when given value is not valid', () => {
    const res = validate({ name: stub(), email: stub() })
    expect(res.isValid).toBe(false)
    expect(res.fields.email).toEqual({
      value: '',
      error: true,
      helperText: 'Please enter a valid email',
    })
  })

  test('should return true when given value is valid', () => {
    const value = 'foobar@lol.com'
    const res = validate({
      name: stub(iv),
      email: stub({ value }),
    })
    expect(res.isValid).toBe(true)
    expect(res.fields.email).toEqual({
      value,
      error: false,
      helperText: ' ',
    })
  })
})
