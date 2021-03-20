import { render } from '@redwoodjs/testing'

import Trigger from './Trigger'

describe('Trigger', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Trigger />)
    }).not.toThrow()
  })
})
