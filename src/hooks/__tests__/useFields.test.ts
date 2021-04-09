import { toFieldShape } from '../useFields'

const value = {
  value: '',
  helperText: ' ',
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
