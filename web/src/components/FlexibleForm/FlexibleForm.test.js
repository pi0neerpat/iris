import { render } from '@redwoodjs/testing'

import FlexibleForm from './FlexibleForm'

describe('FlexibleForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlexibleForm />)
    }).not.toThrow()
  })
})
