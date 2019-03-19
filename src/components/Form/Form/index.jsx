import React, { Component } from 'react'
import { withFormik } from 'formik'
import http from 'service/http'
import Alert from 'components/Alert'
import Card from 'components/Card'
import Icon from 'components/Icons'
import Badge from 'components/Badge'
import Spacing from 'components/Spacing'
import Well from 'components/Well'
import Button from 'components/Button'
import { Row, Col } from 'components/Grid'
import {
  Legend,
  Label,
  Input,
  Select,
  Checkbox,
  InputMask
} from 'components/Form'

import {
  FormStyled,
  FooterStyled
} from '../form.styled'

const fieldsValues = {
  recurrence: 'mensais',
  value: '',
  first_name: '',
  last_name: '',
  email: '',
  document: '',
  card_number: '',
  cvv: '',
  validity: '',
  accept_contact: true,
}

// const sleep = ms =>
//   new Promise(resolve => setTimeout(resolve, ms))

class Form extends Component {
  render () {
    const {
      handleSubmit,
      isSubmitting,
      handleChange,
      handleBlur,
      isValid,
      values,
      errors,
      touched,
    } = this.props

    return (
      <FormStyled
        action="/"
        method="post"
        onSubmit={handleSubmit}
      >
        <Card>
          <Spacing>
            {/* {(Object.keys(errors).length > 0) &&
              <Alert
                type="error"
                icon="error"
              >Corrija os campos abaixo</Alert>
            } */}

            <Legend>Selecione um valor</Legend>
            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Select
                  name="recurrence"
                  id="recurrence"
                  value={values.recurrence}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.recurrence && touched.recurrence}
                  className={
                    errors.recurrence && touched.recurrence ? 'has--error' : ''
                  }
                >
                  <option value="uma única vez">Única</option>
                  <option value="mensais">Mensal</option>
                  <option value="semestrais">Semestral</option>
                  <option value="anuais">Anual</option>
                </Select>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Well>
                  <Input
                    placeholder="R$ 30,00"
                    type="number"
                    name="value"
                    id="value"
                    value={values.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.value && touched.value}
                    className={
                      errors.value && touched.value ? 'has--error' : ''
                    }
                  />
                  <small>Valor mínimo de R$ 15,00</small>
                </Well>
              </Col>
            </Row>
          </Spacing>

          <hr />

          <Spacing>
            <Legend>Dados pessoais</Legend>

            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Label
                  error={
                    (errors.first_name && touched.first_name) &&
                    (errors.last_name && touched.last_name)
                  }
                  htmlFor="first_name"
                >
                    Nome completo <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Row>
                  <Col mobile="12" desktop="6">
                    <Input
                      placeholder="Primeiro nome"
                      name="first_name"
                      id="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.first_name && touched.first_name}
                      className={
                        errors.first_name && touched.first_name ? 'has--error' : ''
                      }
                    />
                  </Col>
                  <Col mobile="12" desktop="6">
                    <Input
                      placeholder="Sobrenome"
                      name="last_name"
                      id="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.last_name && touched.last_name}
                      className={
                        errors.last_name && touched.last_name ? 'has--error' : ''
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Label
                  error={errors.email && touched.email}
                  htmlFor="email"
                >
                    Email <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Input
                  placeholder="email@email.com"
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  className={
                    errors.email && touched.email ? 'has--error' : ''
                  }
                />
              </Col>
            </Row>

            <Legend>Dados de pagamento <Badge><Icon id="icon-lock" /> <span>Dados seguros</span></Badge></Legend>

            <Row>
              <Col mobile="12" desktop="3">
                <Label
                  htmlFor="document"
                  error={errors.document && touched.document}
                >
                    CPF <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" desktop="3">
                <InputMask
                  placeholder="000.000.000-00"
                  mask="999.999.999-99"
                  size="14"
                  name="document"
                  id="document"
                  value={values.document}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.document && touched.document}
                  className={
                    errors.document && touched.document ? 'has--error' : ''
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col mobile="12" desktop="3">
                <Label
                  error={errors.card_number && touched.card_number}
                  htmlFor="card_number"
                >
                    Número do cartão <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" desktop="9">
                <Row>
                  <Col mobile="12" desktop="6">
                    <InputMask
                      placeholder="0000 0000 0000 0000"
                      mask="9999 9999 9999 9999"
                      size="20"
                      name="card_number"
                      id="card_number"
                      value={values.card_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.card_number && touched.card_number}
                      className={
                        errors.card_number && touched.card_number ? 'has--error' : ''
                      }
                    />
                  </Col>
                  <Col mobile="12" desktop="2">
                    <InputMask
                      placeholder="CVV"
                      mask="999"
                      size="3"
                      name="cvv"
                      id="cvv"
                      value={values.cvv}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.cvv && touched.cvv}
                      className={
                        errors.cvv && touched.cvv ? 'has--error' : ''
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col mobile="12" desktop="3">
                <Label
                  error={errors.validity && touched.validity}
                  htmlFor="validity"
                >
                    Validade do cartão <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" desktop="2">
                <InputMask
                  placeholder="00/00"
                  mask="99/99"
                  size="5"
                  name="validity"
                  id="validity"
                  value={values.validity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon="calendar"
                  error={errors.validity && touched.validity}
                  className={
                    errors.validity && touched.validity ? 'has--error' : ''
                  }
                />
              </Col>
            </Row>
          </Spacing>

          <FooterStyled>
            <Spacing>
              <Row>
                <Col mobile="12" desktop="3">
                  {values.value &&
                    <h4 style={{ margin: 0, fontSize: '18px' }}>
                      R$ {values.value || `00`} {values.recurrence}
                    </h4>
                  }
                </Col>
                <Col mobile="12" desktop="9">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >Confirmar doação</Button>
                  <Row>
                    <Col mobile="12" desktop="12">
                      <Checkbox
                        name="accept_contact"
                        id="accept_contact"
                        checked={values.accept_contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Aceito ser contatado para receber informações sobre a ONG"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Spacing>
          </FooterStyled>
        </Card>
      </FormStyled>
    )
  }
}

const matcher = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i // eslint-disable-line
const isEmail = string =>
  matcher.test(string)

export default withFormik({
  mapPropsToValues (props) {
    return fieldsValues
  },

  validate (values) {
    const errors = {}
    const items = Object.entries(values)

    items
      .filter(field => field[1] === '')
      .map(field => {
        const _field = field[0]
        errors[_field] = `Campo ${ field[0] } é obrigatório!`
      })

    if (!isEmail(values.email)) {
      errors.email = `Email inválido!`
    }

    return errors
  },

  async handleSubmit (values, { setSubmitting }) {
    setSubmitting(true)
    await http
      .post('/donors.json', values)
      .then(() => {
        setSubmitting(false)
      })
  }
})(Form)
