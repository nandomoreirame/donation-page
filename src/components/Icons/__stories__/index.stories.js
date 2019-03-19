import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../index'

storiesOf('Icons', module)
  .add('All', () => (
    <>
      <Icon id="icon-close-outline" />
      <Icon id="icon-close" />
      <Icon id="icon-calendar" />
      <Icon id="icon-check" />
      <Icon id="icon-error" />
      <Icon id="icon-facebook" />
      <Icon id="icon-information" />
      <Icon id="icon-instagram" />
      <Icon id="icon-linkedin" />
      <Icon id="icon-lock" />
      <Icon id="icon-pinterest" />
      <Icon id="icon-triangle-down" />
      <Icon id="icon-twitter" />
      <Icon id="icon-youtube" />
    </>
  ))
  .add('close-outline', () => <Icon id="icon-close-outline" />)
  .add('close', () => <Icon id="icon-close" />)
  .add('calendar', () => <Icon id="icon-calendar" />)
  .add('check', () => <Icon id="icon-check" />)
  .add('error', () => <Icon id="icon-error" />)
  .add('facebook', () => <Icon id="icon-facebook" />)
  .add('information', () => <Icon id="icon-information" />)
  .add('instagram', () => <Icon id="icon-instagram" />)
  .add('linkedin', () => <Icon id="icon-linkedin" />)
  .add('lock', () => <Icon id="icon-lock" />)
  .add('pinterest', () => <Icon id="icon-pinterest" />)
  .add('triangle-down', () => <Icon id="icon-triangle-down" />)
  .add('twitter', () => <Icon id="icon-twitter" />)
  .add('youtube', () => <Icon id="icon-youtube" />)
