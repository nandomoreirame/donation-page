import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from '../index'

storiesOf('Alert', module)
  .add('Alert', () => <Alert />)
  .add('Alert with text', () => (
    <Alert>
      <p>Iure possimus voluptas quis totam qui aliquid sit necessitatibus.</p>
    </Alert>
  ))
