import React from 'react'

import 'normalize.css/normalize.css'
import './base.styl'
import module from './layout.module.styl'

const Layout = ({ children, ...props }) => {
  return (
    <div className={module.Default} {...props}>
      <main
        className={module.Default__main}
        role="main"
        aria-label="Conteúdo principal"
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
