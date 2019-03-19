import React from 'react'
import { LegendStyled } from '../form.styled'

export const Legend = ({ children, ...props }) =>
  <LegendStyled { ...props }>{children}</LegendStyled>
