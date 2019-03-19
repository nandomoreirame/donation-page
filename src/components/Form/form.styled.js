import styled from 'styled-components'

export const FormStyled = styled.form`
  width: 100%;
  display: block;
  margin-top: -200px;
  position: relative;
  z-index: 10;
  hr {
    margin: 0;
  }
`

export const LegendStyled = styled.legend`
  font-family: inherit;
  font-size: 24px;
  font-weight: 800;
  color: #424242;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  > span {
    margin-left: 10px;
  }
`

export const LabelStyled = styled.label`
  font-family: inherit;
  font-size: 16px;
  font-weight: 300;
  color: #9e9e9e;
  line-height: 1;
  padding: 13px 0;
  display: inline-box;
  cursor: pointer;
  align-items: center;
  sup {
    font-weight: 800;
    color: rgb(244, 67, 54);
  }
  input {
    margin-top: -3px;
    margin-right: 10px;
  }
  input,
  span {
    vertical-align: middle;
    display: inline-block;
  }
`

const inputError = `
  border: solid 1px #ff5252;
  background-color: #fafafa;
`

const inputStyles = `
  display: block;
  width: 100%;
  line-height: 1;
  border-radius: 3px;
  border: solid 1px #d2d2d2;
  background-color: #fafafa;
  padding: 13px 17px;
  font-size: 14px;
  font-weight: 100;
  appearance: none;
`

export const InputStyled = styled.input`
  ${ inputStyles }
  ${ ({ error }) => error && inputError }
  &::placeholder {
    opacity: 0.54;
    font-style: italic;
    color: rgba(66, 66, 66, 0.54);
  }
`

export const SelectStyled = styled.select`
  ${ inputStyles }
  ${ ({ error }) => error && inputError }
  &.has-error {
    ${ inputError }
  }
`

export const FormGroupStyled = styled.div`
  margin: 0 0 30px;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    opacity: 0.38;
  }
`

export const FooterStyled = styled.div`
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.35);
  background-color: #f5f5f5;
`

export const CheckboxStyled = styled.input`
`
