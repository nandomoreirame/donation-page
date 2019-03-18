import React from 'react'
import { card } from './styles'

export default ({ children, style }) =>
  <div style={{ ...style, ...card }}>{children}</div>
