import React from 'react'
import { FormGroup } from '../'
import { InputStyled } from '../form.styled'

export const Input = ({ type = 'text', ...props }) => (
  <FormGroup>
    <InputStyled type={type} { ...props } />
  </FormGroup>
)
