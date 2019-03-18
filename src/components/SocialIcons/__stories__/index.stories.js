import React from 'react'
import { storiesOf } from '@storybook/react'
import SocialIcons from '../index'

const facebook = { facebook: 'https://fb.com/oseunando' }
const twitter = { twitter: 'https://twitter.com/oseunando' }
const instagram = { instagram: 'https://instagram.com/oseunando' }
const socialLinks = { ...facebook, ...twitter, ...instagram }

storiesOf('SocialIcons', module)
  .add('facebook', () => <SocialIcons socialLinks={{ ...facebook }} />)
  .add('facebook and fill color #000', () => (
    <SocialIcons socialLinks={{ ...facebook }} fillColor="#000" />
  ))
  .add('twitter', () => <SocialIcons socialLinks={{ ...twitter }} />)
  .add('instagram', () => <SocialIcons socialLinks={{ ...instagram }} />)
  .add('facebook and instagram', () => (
    <SocialIcons socialLinks={{ ...instagram, ...facebook }} />
  ))
  .add('twitter and instagram', () => (
    <SocialIcons socialLinks={{ ...twitter, ...instagram }} />
  ))
  .add('all icons', () => <SocialIcons socialLinks={{ ...socialLinks }} />)
  .add('all icons with size', () => (
    <SocialIcons size="50" socialLinks={{ ...socialLinks }} />
  ))
  .add('all icons with fillColor', () => (
    <SocialIcons fillColor="#069" socialLinks={{ ...socialLinks }} />
  ))
