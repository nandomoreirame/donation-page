import React from 'react'
import { FormGroup } from '..'
import Icon from 'components/Icons'
import { SelectStyled } from '../form.styled'

export const Select = ({ icon, children, ...props }) => (
  <FormGroup>
    <SelectStyled { ...props }>{children}</SelectStyled>
    <Icon id="icon-triangle-down" />
  </FormGroup>
)
