import styled from 'styled-components'

const getAlertVariant = type => {
  switch (type) {
  case 'info':
    return `
      color: #0c5460
      background-color: #d1ecf1
      border-color: #bee5eb
    `
  case 'danger':
  case 'error':
    return `
      color: #fff
      background-color: #ff5252
      border-color: #ff5252
    `
  case 'success':
  default:
    return `
      color: #155724
      background-color: #d4edda
      border-color: #c3e6cb
    `
  }
}

export const Alert = styled.div`
  padding: 20px 15px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  margin-bottom: 30px;
  ${ ({ type }) => type && getAlertVariant(type) }
  svg {
    margin: 0;
    padding: 5px;
    margin-right: 5px;
  }
`

export const AlertInner = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  p {
    margin: 0;
  }
`
