import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input, InputMask } from '../'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('type number', () => (
    <Input type="number" />
  ))
  .add('input mask', () => (
    <InputMask mask="9999.9999.9999-9" />
  ))
  .add('input mask with icon', () => (
    <InputMask mask="99/99/9999" icon="calendar" />
  ))
