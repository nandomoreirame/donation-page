import React from 'react'
import ReactInputMask from 'react-input-mask'
import Icon from 'components/Icons'
import { FormGroup, Input } from '../'

export const InputMask = ({ type = 'text', icon, ...props }) => (
  <FormGroup className="has-icon">
    <ReactInputMask {...props}>
      {inputProps => <Input {...inputProps} type={type} />}
    </ReactInputMask>
    {icon && <Icon id={`icon-${ icon }`} />}
  </FormGroup>
)
