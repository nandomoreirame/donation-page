import React, { Fragment } from 'react'
import 'normalize.css/normalize.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalStyle, Default, Main } from './layout.styled'
import logoFooter from '../components/Footer/logo-footer.png'

export const Layout = ({ headerIcons, headerTitle, children, ...props }) => (
  <Fragment>
    <GlobalStyle />
    <Default {...props}>
      {headerIcons &&
        <Header
          hasIcons={true}
          icons={headerIcons}
          pageTitle={headerTitle}
        />
      }
      <Main role="main" aria-label="Conteúdo principal">
        {children}
      </Main>
      <Footer
        logo={logoFooter}
        phones={[{ title: 'Para capitais', number: '0800 00 00 000' }, { title: 'Para outras localidades', number: '11 1234 56789' }]}
        email="contato@ong.org"
      />
    </Default>
  </Fragment>
)
