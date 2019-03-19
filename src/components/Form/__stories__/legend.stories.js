import React from 'react'
import { storiesOf } from '@storybook/react'
import { Legend } from '../'

storiesOf('Legend', module)
  .add('default', () => (
    <Legend>Dados pessoais</Legend>
  ))
