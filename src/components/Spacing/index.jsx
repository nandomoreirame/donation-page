import React from 'react'
import styled from 'styled-components'

export const Div = styled.div`
  padding: 45px;
`

const Spacing = ({ children }) =>
  <Div>{children}</Div>

export default Spacing
