import React, { Component } from 'react'
import Card from 'components/Card'
import Icon from 'components/Icons'
import Alert from 'components/Alert'
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

export class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      paymentFrequency: '',
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

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.formSubmitHandler = this.formSubmitHandler.bind(this)
  }

  onChangeHandler (event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [target.name]: value })
  }

  formSubmitHandler (event) {
    this.setState({
      isLoading: true
    })

    // fetch(`/contato`, {
    //   method: `POST`,
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: this.encode({ 'form-name': 'contact', ...this.state.formData })
    // })
    //   .then(res => this.handleSuccess(res))
    //   .catch(error => {
    //     this.setState({
    //       wasSent: false,
    //       error
    //     })
    //   })

    event.preventDefault()
  }

  render () {
    return (
      <FormStyled action="/" method="post">
        <Card>
          <Spacing>
            <Legend>Selecione um valor</Legend>
            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Select
                  name="paymentFrequency"
                  id="paymentFrequency"
                  value={this.state.paymentFrequency}
                  onChange={this.onChangeHandler}
                >
                  <option value="Mensal">Mensal</option>
                  <option value="Semestral">Semestral</option>
                  <option value="Anual">Anual</option>
                </Select>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Well>
                  <Input
                    placeholder="R$ 30,00"
                    type="number"
                    name="paymentValue"
                    id="paymentValue"
                    value={this.state.paymentValue}
                    onChange={this.onChangeHandler}
                  />
                </Well>
              </Col>
            </Row>
          </Spacing>

          <hr />

          <Spacing>

            <Row>
              <Col>
                <Alert type="error" icon="information">Corrija os campos abaixo</Alert>
              </Col>
            </Row>

            <Legend>Dados pessoais</Legend>

            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Label htmlFor="paymentFirstName">
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
                      value={this.state.paymentFirstName}
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                  <Col mobile="12" desktop="6">
                    <Input
                      placeholder="Sobrenome"
                      name="paymentLastName"
                      id="paymentLastName"
                      value={this.state.paymentLastName}
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col mobile="12" tablet="3" desktop="3">
                <Label htmlFor="paymentEmail">
                  Email <sup>*</sup>
                </Label>
              </Col>
              <Col mobile="12" tablet="9" desktop="9">
                <Input
                  placeholder="email@email.com"
                  type="email"
                  name="paymentEmail"
                  id="paymentEmail"
                  value={this.state.paymentEmail}
                  onChange={this.onChangeHandler}
                />
              </Col>
            </Row>

            <Legend>Dados de pagamento <Badge><Icon id="icon-lock" /> <span>Dados seguros</span></Badge></Legend>

            <Row>
              <Col mobile="12" desktop="3">
                <Label htmlFor="paymentCpf">
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
                  value={this.state.paymentCpf}
                  onChange={this.onChangeHandler} />
              </Col>
            </Row>

            <Row>
              <Col mobile="12" desktop="3">
                <Label htmlFor="paymentCardNumber">
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
                      value={this.state.paymentCardNumber}
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                  <Col mobile="12" desktop="2">
                    <InputMask
                      placeholder="CVV"
                      mask="999"
                      size="3"
                      name="paymentCardCvv"
                      id="paymentCardCvv"
                      value={this.state.paymentCardCvv}
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col mobile="12" desktop="3">
                <Label htmlFor="paymentCardValidate">
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
                  value={this.state.paymentCardValidate}
                  icon="calendar"
                />
              </Col>
            </Row>
          </Spacing>

          <FooterStyled>
            <Spacing>
              <Row>
                <Col mobile="12" desktop="3">
                  <h4>R$ 35 mensais</h4>
                </Col>
                <Col mobile="12" desktop="9">
                  <Button type="submit">Confirmar doação</Button>
                  <Row>
                    <Col mobile="12" desktop="12">
                      <Checkbox
                        name="news"
                        id="news"
                        checked={this.state.news}
                        onChange={this.onChangeHandler}
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
