import styled from 'styled-components'

export const Alert = styled.div`
  padding: 20px;
  font-weight: 300;
`

export const AlertInner = styled.div`
  display: flex;
  align-itens: center;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid transparent;
  border-radius: 3px;
`

export const alertSuccess = {
  color: '#155724',
  backgroundColor: '#d4edda',
  borderColor: '#c3e6cb',
}

export const alertInfo = {
  color: '#0c5460',
  backgroundColor: '#d1ecf1',
  borderColor: '#bee5eb',
}

export const alertError = {
  color: '#fff',
  backgroundColor: '#ff5252',
  borderColor: '#ff5252',
}
