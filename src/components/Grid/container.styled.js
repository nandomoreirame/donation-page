import styled from 'styled-components'

export const ContainerStyled = styled.div`
  max-width: 872px;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;
`

export const RowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
`

const getColSize = value => {
  if (!value) return

  const size = value / 12 * 100
  return `
    flex: 0 0 ${ size }%;
    max-width: ${ size }%;
  `
}

export const ColStyled = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media only screen and (max-width: 769px) {
    ${ ({ mobile }) => mobile && getColSize(mobile) }
  }
  @media only screen and (min-width: 769px) {
    ${ ({ tablet }) => tablet && getColSize(tablet) }
  }
  @media only screen and (min-width: 1025px) {
    ${ ({ desktop }) => desktop && getColSize(desktop) }
  }
`
