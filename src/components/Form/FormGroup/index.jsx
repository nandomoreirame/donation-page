import React from 'react'
import { FormGroupStyled } from '../form.styled'

export const FormGroup = ({ children, ...props }) =>
  <FormGroupStyled {...props}>{children}</FormGroupStyled>
