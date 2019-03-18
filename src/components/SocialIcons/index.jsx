import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/Icons'
import {
  SocialIconsStyled,
  TextStyled,
  LinkStyled
} from './socialicons.styled'

const defaultProps = {
  size: '32',
  fillColor: '#ccc',
  textColor: '#757575',
  socialLinks: {},
}

const SocialIcons = ({ textColor, size, fillColor, socialLinks }) => {
  return (
    <SocialIconsStyled style={{ color: textColor }}>
      {socialLinks && <TextStyled>Compartilhe</TextStyled>}

      {Object.keys(socialLinks).map((item, i) => {
        const link = socialLinks[item]
        if (!link) return null
        return (
          <LinkStyled
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <Icon id={`icon-${ item }`} fill={fillColor} width={size} height={size} style={{ padding: '4px' }} />
          </LinkStyled>
        )
      })}
    </SocialIconsStyled>
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
