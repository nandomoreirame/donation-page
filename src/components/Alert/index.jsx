import React, { Fragment } from 'react'
import Icon from 'components/Icons'

import {
  Alert,
  AlertInner
} from './alert.styled'

export default ({ type = 'success', icon, children, ...props }) => {
  return (
    <Fragment>
      {children &&
        <Alert className={`alert alert--${ type }`} type={type} {...props}>
          {icon && <Icon id={`icon-${ icon }`} fill="currentColor" />}
          <AlertInner className="Alert__inner">{children}</AlertInner>
        </Alert>
      }
    </Fragment>
  )
}
