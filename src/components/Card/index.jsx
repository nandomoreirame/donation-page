import React from 'react'
import { Card } from './card.styled'

export default ({ children, style }) =>
  <Card className="card" style={{ ...style }}>{children}</Card>
