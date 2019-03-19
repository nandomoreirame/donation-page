import React from 'react'
import { FormGroup } from '../'
import { InputStyled } from '../form.styled'

export const Input = ({ type = 'text', error, ...props }) => (
  <FormGroup className="form-group">
    <InputStyled
      type={type}
      error={error}
      { ...props }
    />
  </FormGroup>
)
