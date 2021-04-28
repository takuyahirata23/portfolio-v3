import '@testing-library/jest-dom/extend-expect'
import { render } from '../../utils/test-utils'
import Switch from './Switch'

const TestComponent = ({ str }: { str: string }) => <div>{str}</div>

const texts = ['Left', 'Right']

test('should not render Left and Right when not provided', () => {
  const { getByText } = render(<Switch updater={() => {}} />)
  texts.forEach(x => {
    expect(() => {
      getByText(x)
    }).toThrow()
  })
})

test('should render Left and Right', () => {
  const { getByText } = render(
    <Switch
      updater={() => {}}
      Left={<TestComponent str={texts[0]} />}
      Right={<TestComponent str={texts[1]} />}
    />
  )

  expect(getByText(texts[0])).toBeInTheDocument()
  expect(getByText(texts[1])).toBeInTheDocument()
})
