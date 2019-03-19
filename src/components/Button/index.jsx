import React from 'react'
import { ButtonStyled } from './button.styled'

const Button = ({ children, ...props }) =>
  <ButtonStyled { ...props }>{children}</ButtonStyled>

export default Button
