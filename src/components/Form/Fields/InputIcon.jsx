import React from 'react'
import { Input, FormGroup } from '../'
import Icon from 'components/Icons'

export const InputIcon = ({ type = 'text', icon, ...props }) => (
  <FormGroup className="has-icon">
    <Input type={type} { ...props } />
    {icon && <Icon id={`icon-${ icon }`} />}
  </FormGroup>
)
