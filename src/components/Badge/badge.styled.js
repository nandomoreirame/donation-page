import styled from 'styled-components'

export const Badge = styled.span`
  display: inline-block;
  padding: 8px;
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  text-transform: uppercase;
  border-radius: 3px;
  background-color: #f5f5f5;
  svg, span {
    display: inline-block;
    vertical-align: middle;
  }
  svg {
    width: 13px;
    height: 13px;
    fill: #424242;
  }
`
