import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from '../index'
import Icon from '../../Icons'

storiesOf('Badge', module)
  .add('badge', () => (
    <Badge>5</Badge>
  ))
  .add('with icon', () => (
    <Badge><Icon id="icon-lock" /> Site protegido</Badge>
  ))
