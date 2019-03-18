import React from 'react'
import {
  Alert,
  AlertInner,
  alertInfo,
  alertError,
  alertSuccess
} from './alert.styled'

export default ({ type, children, ...props }) => {
  let styles = {}
  switch (type) {
  case 'info':
    styles = { ...alertInfo }
    break
  case 'error':
    styles = { ...alertError }
    break
  case 'success':
  default:
    styles = { ...alertSuccess }
    break
  }
  return (
    <Alert className={`Alert Alert--${ type }`} style={styles} {...props}>
      {children && <AlertInner className="Alert__inner">{children}</AlertInner>}
    </Alert>
  )
}
