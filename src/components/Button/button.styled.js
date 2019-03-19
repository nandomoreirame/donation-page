import styled from 'styled-components'

const buttonVariant = type => {
  switch (type) {
  case 'secondary':
    return `
      color: #fff;
      border-color: #2196f3;
      background-color: #2196f3;
      svg {
        fill: #fff;
      }
      &:hover {
        border-color: #0059a0;
        background-color: #0059a0;
      }
    `
  case 'primary':
  default:
    return `
      color: #fff;
      border-color: #ff9800;
      background-color: #ff9800;
      svg {
        fill: #fff;
      }
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
  svg {
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px 0 0;
    width: 16px;
    height: 16px;
  }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
    color: #666666;
    border-color: #c0c0c0;
    background-color: #ccc;
  }
`
