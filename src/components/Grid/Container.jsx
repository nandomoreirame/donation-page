import React from 'react'
import { ContainerStyled } from './container.styled'

export const Container = ({ children, ...props }) =>
  <ContainerStyled className="container" {...props}>{children}</ContainerStyled>
