import React from 'react'
import PropTypes from 'prop-types'
import SocialIcons from 'components/SocialIcons'
import { HeaderStyled, InnerStyled } from './header.styled.js'
import pageLogo from './logo-header.png'

const defaultProps = {
  pageLogo,
  pageTitle: '',
  bgColor: '#fff',
  textColor: '#757575',
  hasIcons: false,
  icons: {
    facebook: '',
    twitter: '',
    instagram: '',
  },
}

const Header = ({
  pageLogo,
  pageTitle,
  bgColor,
  textColor,
  hasIcons,
  icons,
}) => {
  const { facebook, twitter, instagram } = icons

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <HeaderStyled style={headerStyles}>
      <InnerStyled>
        {pageLogo && <img src={pageLogo} alt={pageTitle} />}
        {hasIcons && (
          <SocialIcons
            fillColor="#ccc"
            socialLinks={{ facebook, twitter, instagram }}
          />
        )}
      </InnerStyled>
    </HeaderStyled>
  )
}

const propTypes = {
  pageLogo: PropTypes.string,
  pageTitle: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hasIcons: PropTypes.bool,
  icons: PropTypes.object,
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
