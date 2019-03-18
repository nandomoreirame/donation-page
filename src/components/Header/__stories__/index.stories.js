import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../index'
import logo from '../logo-header.png'

const icons = {
  facebook: 'oseunando',
  twitter: 'oseunando',
  instagram: 'oseunando',
}

storiesOf('Header', module)
  .add('with logo', () => <Header logo={logo} />)
  .add('with SocialIcons', () => <Header hasIcons={true} icons={icons} />)
  .add('change background', () => <Header bgColor="#cecece" />)
  .add('change text color', () => <Header textColor="#999" />)
  .add('change background and color', () => (
    <Header bgColor="#333" textColor="#fff" />
  ))
