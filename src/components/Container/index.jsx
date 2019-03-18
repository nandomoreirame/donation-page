import React from 'react'
import { container } from './styles'

export default ({ children, ...props }) =>
  <div style={container} {...props}>{children}</div>
