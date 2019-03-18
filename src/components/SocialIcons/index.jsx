import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icons'
import styles from './styles'

const defaultProps = {
  size: '32',
  fillColor: '#ccc',
  textColor: '#757575',
  socialLinks: {},
}

const SocialIcons = ({ textColor, size, fillColor, socialLinks }) => {
  return (
    <div style={{ ...styles.socialIcons, color: textColor }}>
      {socialLinks && <span style={styles.socialIconsText}>Compartilhe</span>}

      {Object.keys(socialLinks).map((item, i) => {
        const link = socialLinks[item]
        if (!link) return null
        return (
          <a
            style={{ ...styles.socialIconsLink }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <Icon id={`icon-${ item }`} fill={fillColor} width={size} height={size} style={{ padding: '4px' }} />
          </a>
        )
      })}
    </div>
  )
}

const propTypes = {
  size: PropTypes.string,
  textColor: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
}

SocialIcons.propTypes = propTypes
SocialIcons.defaultProps = defaultProps

export default SocialIcons
