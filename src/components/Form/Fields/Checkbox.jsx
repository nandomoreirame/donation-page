import React from 'react'
import { Label, FormGroup } from '..'
import { CheckboxStyled } from '../form.styled'

export const Checkbox = ({ label, ...props }) => (
  <FormGroup>
    <Label className="checkbox">
      <CheckboxStyled type="checkbox" { ...props } />
      {label && <span>{label}</span>}
    </Label>
  </FormGroup>
)
