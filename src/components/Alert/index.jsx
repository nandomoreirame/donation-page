import React, { Fragment } from 'react'
import Icon from '../Icons'

import {
  Alert,
  AlertInner,
  alertInfo,
  alertError,
  alertSuccess
} from './alert.styled'

export default ({ type = 'success', icon, children, ...props }) => {
  let styles = {}
  switch (type) {
  case 'info':
    styles = { ...alertInfo }
    break
  case 'danger':
  case 'error':
    styles = { ...alertError }
    break
  case 'success':
  default:
    styles = { ...alertSuccess }
    break
  }
  return (
    <Fragment>
      {children &&
        <Alert className={`alert alert--${ type }`} style={styles} {...props}>
          {icon && <Icon id={`icon-${ icon }`} fill="currentColor" />}
          <AlertInner className="Alert__inner">{children}</AlertInner>
        </Alert>
      }
    </Fragment>
  )
}
