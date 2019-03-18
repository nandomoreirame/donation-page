import React from 'react'
import { RowStyled } from './container.styled'

export const Row = ({ children, ...props }) =>
  <RowStyled {...props}>{children}</RowStyled>
