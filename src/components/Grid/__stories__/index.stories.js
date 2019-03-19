import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Row, Col } from '../'

storiesOf('Grid', module)
  .add('Container', () => (
    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iure? Obcaecati, dolores corporis sunt itaque fugiat esse consectetur tempore officia ea molestiae, nemo tenetur error voluptas, eaque doloremque. Doloremque, illum!</p>
    </Container>
  ))
  .add('Container with Row', () => (
    <Container>
      <Row>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iure? Obcaecati, dolores corporis sunt itaque fugiat esse consectetur tempore officia ea molestiae, nemo tenetur error voluptas, eaque doloremque. Doloremque, illum!</p>
      </Row>
    </Container>
  ))
  .add('Container with Row and Col', () => (
    <Container>
      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iure? Obcaecati, dolores corporis sunt itaque fugiat esse consectetur tempore officia ea molestiae, nemo tenetur error voluptas, eaque doloremque. Doloremque, illum!</p>
        </Col>
      </Row>
    </Container>
  ))
  .add('Col auto', () => {
    const columns = 12
    const columnsArr = Array.apply(null, { length: columns }).map(Number.call, Number)
    return (
      <Container>
        <Row>
          {columnsArr.map((col, i) => (
            <Col>col {i + 1}</Col>
          ))}
        </Row>
      </Container>
    )
  })
  .add('Col desktop="6"', () => (
    <Container>
      <Row>
        <Col desktop="6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col desktop="6">
          <p>Perferendis, iure? Obcaecati, dolores corporis sunt itaque</p>
        </Col>
        <Col desktop="6">
          <p>fugiat esse consectetur tempore officia ea molestiae</p>
        </Col>
        <Col desktop="6">
          <p>nemo tenetur error voluptas, eaque doloremque. Doloremque, illum!</p>
        </Col>
      </Row>
    </Container>
  ))
  .add('Col mobile="6" tablet="4"', () => (
    <Container>
      <Row>
        <Col mobile="6" tablet="4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col mobile="6" tablet="8">
          <p>Perferendis, iure? Obcaecati, dolores corporis sunt itaque</p>
        </Col>
        <Col mobile="6" tablet="4">
          <p>fugiat esse consectetur tempore officia ea molestiae</p>
        </Col>
        <Col mobile="6" tablet="8">
          <p>nemo tenetur error voluptas, eaque doloremque. Doloremque, illum!</p>
        </Col>
      </Row>
    </Container>
  ))
