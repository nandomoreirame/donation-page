import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import 'normalize.css/normalize.css'
import './base.styl'
import module from './layout.module.styl'
import logoFooter from '../Footer/logo-footer.png'

const defaultProps = {
  headerTitle: '',
  headerIcons: {
    facebook: '',
    twitter: '',
    instagram: '',
  },
}

const Layout = ({ headerIcons, headerTitle, children, ...props }) => (
  <div className={module.Default} {...props}>
    {headerIcons &&
      <Header
        hasIcons={true}
        icons={headerIcons}
        pageTitle={headerTitle}
      />
    }
    <main
      role="main"
      aria-label="Conteúdo principal"
      className={module.Default__main}
    >
      {children}
    </main>
    <Footer
      logo={logoFooter}
      phones={[{ title: 'Para capitais', number: '0800 00 00 000' }, { title: 'Para outras localidades', number: '11 1234 56789' }]}
      email="contato@ong.org"
    />
  </div>
)

const propTypes = {
  headerTitle: PropTypes.string,
  headerIcons: PropTypes.object,
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
