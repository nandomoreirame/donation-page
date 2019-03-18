import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../index'

storiesOf('Card', module)
  .add('Card', () => <Card />)
  .add('Card with children', () => (
    <Card>
      <h1>Hello Card!</h1>
    </Card>
  ))
