import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from '../index'

storiesOf('Alert', module)
  .add('Type success', () => (
    <Alert>
      <p>Iure possimus voluptas quis totam qui aliquid sit necessitatibus.</p>
    </Alert>
  ))
  .add('Type danger', () => (
    <Alert type="danger">
      <p>Iure possimus voluptas quis totam qui aliquid sit necessitatibus.</p>
    </Alert>
  ))
  .add('Type info', () => (
    <Alert type="info">
      <p>Iure possimus voluptas quis totam qui aliquid sit necessitatibus.</p>
    </Alert>
  ))
  .add('With icon', () => (
    <Alert icon="check">
      <p>Iure possimus voluptas quis totam qui aliquid sit necessitatibus.</p>
    </Alert>
  ))
  .add('Type danger With icon', () => (
    <Alert type="danger" icon="information">
      <p>Iure possimus voluptas quis totam qui aliquid sit necessitatibus.</p>
    </Alert>
  ))
