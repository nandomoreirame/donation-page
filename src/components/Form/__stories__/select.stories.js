import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Label } from '../'

storiesOf('Select', module)
  .add('default', () => (
    <>
      <Label>Selecione uma condução</Label>
      <Select>
        <option>Bicicleta</option>
        <option>Carro</option>
        <option>Moto</option>
        <option>Camelo</option>
        <option>Cavalo</option>
      </Select>
    </>
  ))
