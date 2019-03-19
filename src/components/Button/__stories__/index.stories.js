import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../index'
import Icon from '../../Icons'

storiesOf('Button', module)
  .add('default', () => (
    <Button>Ok, enviar</Button>
  ))
  .add('primary', () => (
    <Button type="primary">Ok, Salvar</Button>
  ))
  .add('default with icon', () => (
    <Button><Icon id="icon-check" /> Salvar</Button>
  ))
  .add('primary with icon', () => (
    <Button type="primary"><Icon id="icon-check" /> Salvar</Button>
  ))
  .add('secondary', () => (
    <Button type="secondary"><Icon id="icon-check" /> Salvar</Button>
  ))
