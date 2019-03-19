import React from 'react'
import { LabelStyled } from '../form.styled'

export const Label = ({ children, ...props }) =>
  <LabelStyled { ...props }>{children}</LabelStyled>
