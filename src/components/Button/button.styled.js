import styled from 'styled-components'

const buttonVariant = type => {
  switch (type) {
  case 'secondary':
    return `
      color: #fff;
      border-color: #ff9800;
      background-color: #ff9800;
    `
  case 'primary':
  default:
    return `
      color: #fff;
      border-color: #ff9800;
      background-color: #ff9800;
      &:hover {
        border-color: #da8201;
        background-color: #da8201;
      }
    `
  }
}

export const ButtonStyled = styled.button`
  background-image: none;
  border: 1px solid transparent;
  border-radius: 3px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  padding: 15px 20px;
  appearance: none;
  transition: background-color .12s ease-in-out, color .12s ease-in-out, border-color .12s ease-in-out;
  ${ ({ type }) => type && buttonVariant(type) }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
    color: #666666;
    border-color: #c0c0c0;
    background-color: #ccc;
  }
`
