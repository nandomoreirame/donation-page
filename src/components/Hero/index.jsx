import React from 'react'
import PropTypes from 'prop-types'
import { hero, heroInner, heroTitle, heroDescription } from './styles'

const defaultProps = {
  backgroundColor: '#fff',
  title: 'Hello Hero!',
  description: '',
  cover: '',
}

const Hero = ({ title, description, backgroundColor, cover }) => (
  <div style={{ ...hero, backgroundColor, backgroundImage: `url(${ cover })` }}>
    <div style={heroInner}>
      {title && <h1 style={heroTitle}>{title}</h1>}
      {description && <p style={heroDescription}>{description}</p>}
    </div>
  </div>
)

const propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cover: PropTypes.string,
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
