import { classNames, toLabel, isScrollYZero } from './functions'

describe('classNames', () => {
  test('should concat classNames', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar')
  })
})

describe('toLabel', () => {
  test('should upper case the first letter', () => {
    expect(toLabel('foo')).toBe('Foo')
  })
})

describe('isScrollYZero', () => {
  test('should return false when value is not 0', () => {
    expect(isScrollYZero({ scrollY: 20 })).toBeFalsy()
  })

  test('should return true when value is  0', () => {
    expect(isScrollYZero({ scrollY: 0 })).toBeTruthy()
  })
})
