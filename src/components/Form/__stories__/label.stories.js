import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label } from '../'

storiesOf('Label', module)
  .add('default', () => (
    <Label>Seu nome completo</Label>
  ))
  .add('required', () => (
    <Label>Email <sup>*</sup></Label>
  ))
