import styled from 'styled-components'

export const Alert = styled.div`
  padding: 20px 15px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
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
