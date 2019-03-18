import React from 'react'
import { WellStyled } from './well.styled'

export default ({ children, ...props }) =>
  <WellStyled { ...props }>{children}</WellStyled>
