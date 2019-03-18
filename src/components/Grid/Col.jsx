import React from 'react'
import { ColStyled } from './container.styled'

export const Col = ({ children, ...props }) =>
  <ColStyled {...props}>{children}</ColStyled>
