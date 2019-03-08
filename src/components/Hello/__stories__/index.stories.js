import React from 'react'

import { storiesOf } from '@storybook/react'

import Hello from '../index'

storiesOf('Hello', module)
  .add('Hello Storybook', () => <Hello title="Hello storybook!!" />)
  .add('Hello another', () => <Hello title="Hello another" />)
