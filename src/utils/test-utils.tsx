import { render } from '@testing-library/react'
import { ThemeProvider } from '../components'

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options?: Omit<any, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
