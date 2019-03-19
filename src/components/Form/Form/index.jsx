import React, { Component } from 'react'
import { withFormik } from 'formik'
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
  paymentFrequency: 'mensais',
  paymentValue: '',
  paymentFirstName: '',
  paymentLastName: '',
  paymentEmail: '',
  paymentCpf: '',
  paymentCardNumber: '',
  paymentCardCvv: '',
  paymentCardValidate: '',
  news: true,
}

// const sleep = ms =>
//   new Promise(resolve => setTimeout(resolve, ms))

const matcher = /.+\@.+\..+/ // eslint-disable-line
const isEmail = string =>
  matcher.test(string)

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      fieldsValues,
    }
  }

  // handleChange (event) {
  //   const { target } = event
  //   const value = target.type === 'checkbox' ? target.checked : target.value
  //   this.setState({ [target.name]: value })
  // }

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
            {(Object.keys(errors).length > 0) &&
              <Alert
                type="error"
                icon="error"
              >Corrija os campos abaixo</Alert>
            }

            <Legend>Selecione um valor</Legend>
            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Select
                  name="paymentFrequency"
                  id="paymentFrequency"
                  value={values.paymentFrequency}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.paymentFrequency && touched.paymentFrequency}
                  className={
                    errors.paymentFrequency && touched.paymentFrequency ? 'has--error' : ''
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
                    name="paymentValue"
                    id="paymentValue"
                    value={values.paymentValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.paymentValue && touched.paymentValue}
                    className={
                      errors.paymentValue && touched.paymentValue ? 'has--error' : ''
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
                    (errors.paymentFirstName && touched.paymentFirstName) &&
                    (errors.paymentLastName && touched.paymentLastName)
                  }
                  htmlFor="paymentFirstName"
                >
                    Nome completo <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Row>
                  <Col mobile="12" desktop="6">
                    <Input
                      placeholder="Primeiro nome"
                      name="paymentFirstName"
                      id="paymentFirstName"
                      value={values.paymentFirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.paymentFirstName && touched.paymentFirstName}
                      className={
                        errors.paymentFirstName && touched.paymentFirstName ? 'has--error' : ''
                      }
                    />
                  </Col>
                  <Col mobile="12" desktop="6">
                    <Input
                      placeholder="Sobrenome"
                      name="paymentLastName"
                      id="paymentLastName"
                      value={values.paymentLastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.paymentLastName && touched.paymentLastName}
                      className={
                        errors.paymentLastName && touched.paymentLastName ? 'has--error' : ''
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Label
                  error={errors.paymentEmail && touched.paymentEmail}
                  htmlFor="paymentEmail"
                >
                    Email <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Input
                  placeholder="email@email.com"
                  type="email"
                  name="paymentEmail"
                  id="paymentEmail"
                  value={values.paymentEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.paymentEmail && touched.paymentEmail}
                  className={
                    errors.paymentEmail && touched.paymentEmail ? 'has--error' : ''
                  }
                />
              </Col>
            </Row>

            <Legend>Dados de pagamento <Badge><Icon id="icon-lock" /> <span>Dados seguros</span></Badge></Legend>

            <Row>
              <Col mobile="12" desktop="3">
                <Label
                  htmlFor="paymentCpf"
                  error={errors.paymentCpf && touched.paymentCpf}
                >
                    CPF <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" desktop="3">
                <InputMask
                  placeholder="000.000.000-00"
                  mask="999.999.999-99"
                  size="14"
                  name="paymentCpf"
                  id="paymentCpf"
                  value={values.paymentCpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.paymentCpf && touched.paymentCpf}
                  className={
                    errors.paymentCpf && touched.paymentCpf ? 'has--error' : ''
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col mobile="12" desktop="3">
                <Label
                  error={errors.paymentCardNumber && touched.paymentCardNumber}
                  htmlFor="paymentCardNumber"
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
                      name="paymentCardNumber"
                      id="paymentCardNumber"
                      value={values.paymentCardNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.paymentCardNumber && touched.paymentCardNumber}
                      className={
                        errors.paymentCardNumber && touched.paymentCardNumber ? 'has--error' : ''
                      }
                    />
                  </Col>
                  <Col mobile="12" desktop="2">
                    <InputMask
                      placeholder="CVV"
                      mask="999"
                      size="3"
                      name="paymentCardCvv"
                      id="paymentCardCvv"
                      value={values.paymentCardCvv}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.paymentCardCvv && touched.paymentCardCvv}
                      className={
                        errors.paymentCardCvv && touched.paymentCardCvv ? 'has--error' : ''
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col mobile="12" desktop="3">
                <Label
                  error={errors.paymentCardValidate && touched.paymentCardValidate}
                  htmlFor="paymentCardValidate"
                >
                    Validade do cartão <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" desktop="2">
                <InputMask
                  placeholder="00/00"
                  mask="99/99"
                  size="5"
                  name="paymentCardValidate"
                  id="paymentCardValidate"
                  value={values.paymentCardValidate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon="calendar"
                  error={errors.paymentCardValidate && touched.paymentCardValidate}
                  className={
                    errors.paymentCardValidate && touched.paymentCardValidate ? 'has--error' : ''
                  }
                />
              </Col>
            </Row>
          </Spacing>

          <FooterStyled>
            <Spacing>
              <Row>
                <Col mobile="12" desktop="3">
                  <h4 style={{ margin: 0, fontSize: '18px' }}>R$ {this.state.paymentValue || `00`} {this.state.paymentFrequency}</h4>
                </Col>
                <Col mobile="12" desktop="9">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >Confirmar doação</Button>
                  <Row>
                    <Col mobile="12" desktop="12">
                      <Checkbox
                        name="news"
                        id="news"
                        checked={values.news}
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

    if (!isEmail(values.paymentEmail)) {
      errors.paymentEmail = `Email inválido!`
    }

    return errors
  },

  handleSubmit (values, formikBag) {
    console.log(values)

    formikBag.setSubmitting(false)
  }
})(Form)
