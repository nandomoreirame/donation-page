import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../index'
import logo from '../logo-footer.png'

storiesOf('Footer', module)
  .add('Footer', () => <Footer />)
  .add('With logo', () => <Footer logo={logo} />)
  .add('With logo and phone1', () => (
    <Footer logo={logo} phone1="(023) AB C 1234-5555" />
  ))
  .add('With phone1', () => <Footer phone1="(023) AB C 1234-5555" />)
  .add('With phone2', () => <Footer phone2="(41) 98440-1111" />)
  .add('With email', () => <Footer email="nono@nonono.com" />)
  .add('With phone1, phone2 and email', () => (
    <Footer
      phone1="(023) AB C 1234-5555"
      phone2="(41) 98440-1111"
      email="nono@nonono.com"
    />
  ))
