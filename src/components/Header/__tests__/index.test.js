import React from 'react'
import { render } from 'react-testing-library'
import Hello from '../index'

describe(`Hello`, () => {
  it(`renders title`, () => {
    const helloTitle = `Hello World`
    const { getByText } = render(<Hello title={helloTitle} />)

    const title = getByText(helloTitle)

    expect(title).toBeInTheDocument()
  })
})
