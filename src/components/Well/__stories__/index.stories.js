import React from 'react'
import { storiesOf } from '@storybook/react'
import Well from '../index'

storiesOf('Well', module)
  .add('default', () => (
    <Well>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima optio dicta nihil beatae quasi labore et, corporis magnam perferendis recusandae soluta fuga numquam sed nobis nisi, necessitatibus dolorum doloremque sequi!
    </Well>
  ))
