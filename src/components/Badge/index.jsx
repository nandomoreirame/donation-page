import React from 'react'
import { Badge } from './badge.styled'

export default ({ children, ...props }) => {
  if (!children) return null
  return <Badge { ...props }>{children}</Badge>
}
