import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../'

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox label="Aceito ser contatado para receber informações sobre a ONG" />
  ))
