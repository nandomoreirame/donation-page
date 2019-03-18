import React from 'react'
import { Container } from './container.styled'

export default ({ children, ...props }) =>
  <Container className="container" {...props}>{children}</Container>
